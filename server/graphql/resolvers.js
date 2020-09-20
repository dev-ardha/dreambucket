const User = require('../models/user.model');
const dbConnect = require('../../utils/dbConnect');
const argon2 = require('argon2');
const AuthenticationError = require('apollo-server-express').AuthenticationError;
const Dream = require('../models/dream.model')

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
                const user = User.findOne({username}).select('username fullname photo verified followers following')

                return user;
            } catch (error) {
                throw error;
            }
        },
        dreamsByUser: async (_parent, {username}, _context) => {
            try {
                const user = await User.findOne({username}).populate('dreams')

                return user.dreams
            } catch (error) {
                throw error
            }
        },
        search: async (_parent, {query}, _context) => {
            try {
                const users = await User.find({ "username": { "$regex": `${query}`, "$options": "i" } })

                return users
            } catch (error) {
                throw error
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
        },
        addDream: async (_parent, {title, description, images, dreamer}, _context) => {
            try {
                const newDream = await Dream.create({
                    title: title,
                    description: description,
                    images: images,
                    dreamer: dreamer
                })
                await newDream.save()

                const user = await User.findById(dreamer);
                user.dreams.push(newDream)
                await user.save()

                return newDream;
            } catch (error) {
                throw error
            }
        },
        follow: async (_parent, {id, meId}, _context) => {
            try {
                const userToFollow = await User.findById(id);
                const me = await User.findById(meId);

                const dataForMe = {
                    followingUsername: userToFollow.username,
                    acc: true
                }

                const dataForThem = {
                    followersUsername: me.username,
                    acc: true
                }

                await me.following.push(dataForMe)
                await me.save()
                await userToFollow.followers.push(dataForThem)
                await userToFollow.save()
                
                return true

            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
};

module.exports = resolvers;