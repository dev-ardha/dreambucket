const gql = require('apollo-server-express').gql

const typeDefs = gql`
    type SocialLogin{
        googleID: String
    }

    type UserCredentials{
        id: ID!
        fullname: String!
        username: String!
        verified: Boolean!
        email: String!
        password: String!
        photo: String
        social_login: SocialLogin
    }

    type Following{
        followingUsername: String
        acc: Boolean
    }
    type Followers{
        followersUsername: String
        acc: Boolean
    }

    type User{
        fullname: String!
        username: String!
        verified: Boolean!
        photo: String
        following: [Following]
        followers: [Followers]
    }

    type searchReturn{
        username: String!
        photo: String!
    }

    type returnAuth{
        user: UserCredentials
    }

    type Dream{
        title: String
        description: String
        achieved: Boolean
        images: String
        dreamer: String
    }

    type Query{
        users: [UserCredentials]
        whoami: returnAuth
        user(username: String): User
        dreamsByUser(username: String): [Dream]
        search(query: String): [searchReturn]
    }

    type Mutation{
        register(fullname: String, email: String, password: String, username: String): returnAuth
        login(email: String, password: String): returnAuth
        addDream(title: String, description: String, images: String, dreamer: String): Dream
        follow(id: String!, meId: String!): Boolean
    }
`

module.exports = typeDefs;