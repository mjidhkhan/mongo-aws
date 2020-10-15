const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const db = require('dotenv').config();

const Post = require('./models/Post');
const User = require('./models/User');



const typeDefs = gql`
    type Post{
        id: ID!,
        title: String!,
        body: String!,
        username: String!,
        creaqtedAt: String!
    }
    type Query {
        getPosts: [Post]
    }
`

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find();
                return posts;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(db.parsed.DB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => {
        console.log(`MongoDb connected ${db.parsed.DB}`)
        return server.listen({ port: 5000 })
    })
        .then(res => {
        console.log(` Server running at ${res.url}`)
})