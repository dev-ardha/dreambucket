const passport = require('passport');
const { GraphQLLocalStrategy } = require('graphql-passport');
const User = require('../server/models/user.model');
const argon2 = require('argon2');

const initPassport = () => {
    passport.use(
        new GraphQLLocalStrategy((email, password, done) => {
            User.findOne({email}).then(async user => {
                const verify = await argon2.verify(user.password, password);
                const error = verify ? null : new Error('Email or password invalid!')

                done(error, user);

            }).catch(err => {
                done(new Error('User not found'), null)
            })
        }),
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        
        if(user){
            done(null, user);
        };
    });
};

module.exports = initPassport;