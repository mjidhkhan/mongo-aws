const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const db = require('dotenv').config();

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose
    .connect(db.parsed.MYDB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log(`MongoDb connected `)
        return server.listen({ port: 5000 })
    })
        .then((res) => {
        console.log(`Server running at ${res.url}`)
})