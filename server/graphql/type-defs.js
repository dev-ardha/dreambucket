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

    type User{
        fullname: String!
        username: String!
        verified: Boolean!
        photo: String
    }

    type returnAuth{
        user: UserCredentials
    }

    type Query{
        users: [UserCredentials]
        whoami: returnAuth
        user(username: String): User
    }

    type Mutation{
        register(fullname: String, email: String, password: String, username: String): returnAuth
        login(username: String, password: String): returnAuth
    }
`

module.exports = typeDefs;