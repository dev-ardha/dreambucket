const next = require('next')
const express = require('express');
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const uid = require('uid-safe');
const session = require("express-session");
const ApolloServer = require('apollo-server-express').ApolloServer;
const schema = require('../server/graphql/schema');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const initPassport = require('../lib/passport');
const { buildContext } = require('graphql-passport');
const cors = require('cors');
const { v4 } = require('uuid');
const dbConnect = require('../utils/dbConnect');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session);

app.prepare()
    .then(()=> {
        dbConnect();
        const server = express();

        // Express Session Configuration
        const sessionConfig = {
            genid: (req) => v4(),
            store: new MongoStore({ mongooseConnection: mongoose.connection }),
            secret: 'secret',
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 // 24 hours
            },
            name: 'sid',
            resave: false,
            saveUninitialized: false,
        };

        initPassport();

        const corsOptions = {
            origin: ['http://localhost:3000'],
            credentials: true,
        };
        server.use(cors(corsOptions));
        
        server.use(cookieParser());
        server.use(session(sessionConfig));

        server.use(passport.initialize());
        server.use(passport.session());

        // Setup Apollo Server
        const apollo = new ApolloServer({
            schema,
            context: ({ req, res }) => buildContext({ req, res }),
            playground: {
                settings: {
                  'request.credentials': 'same-origin',
                },
            },
        });

        apollo.applyMiddleware({
            app: server,
            path: '/api/graphql',
            cors: false
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