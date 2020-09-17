const User = require('../models/user.model');
const dbConnect = require('../../utils/dbConnect');
const argon2 = require('argon2');
const AuthenticationError = require('apollo-server-express').AuthenticationError;

dbConnect();

const resolvers = {
    Query: {
        users: async (_parent, _args, _context) => {
            try {
                const users = User.find({});

                return users;
            } catch (error) {
                throw error;
            }
        },
        user: async (_parent, {username}, _context)=> {
            try {
                const user = User.findOne({username}).select('username fullname photo verified')

                return user;
            } catch (error) {
                throw error;
            }
        }
    },
    Mutation: {
        register: async (_parent, { fullname, username, email, password }, { res }) => {
            try {
                const user = await User.findOne({username})

                if(user){
                    return new AuthenticationError('User has already exist')
                }

                const hashedPassword = await argon2.hash(password)

                const newUser = await User.create({
                    fullname: fullname,
                    username: username,
                    email: email,
                    password: hashedPassword,
                });

                const data = {
                    user: newUser
                }
    
                return data;


            } catch (error) {
                return new AuthenticationError('Authentication failed. Please try to reload the page.')
            }
        }
    }
};

module.exports = resolvers;