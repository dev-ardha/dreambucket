const next = require('next')
const express = require('express');
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const uid = require('uid-safe');
const session = require("express-session");
const ApolloServer = require('apollo-server-express').ApolloServer
const schema = require('../server/graphql/schema')

app.prepare()
    .then(()=> {
        const server = express();

        // Express Session Configuration
        const sessionConfig = {
            secret: uid.sync(18),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 // 24 hours
            },
            name: 'sid',
            resave: false,
            saveUninitialized: true
        };
        server.use(session(sessionConfig));

        // Setup Apollo Server
        const apollo = new ApolloServer({
            schema,
            context: ({ req, res }) => ({ req, res }),
        });

        apollo.applyMiddleware({
            app: server,
            path: '/api/graphql'
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(PORT, err => {
            if(err){
                throw err
            }else{
                const link = 'ready on http://localhost:3000'
                console.log('\x1b[36m%s\x1b[0m', 'event', `- ${link}`)
            }
        })
    }).catch(err => {
        console.error(err.stack);
        process.exit(1);
    }) 