const makeExecutableSchema = require('@graphql-tools/schema').makeExecutableSchema
const resolvers = require('./resolvers')
const typeDefs = require('./type-defs')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema