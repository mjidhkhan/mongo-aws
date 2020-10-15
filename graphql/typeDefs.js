const { gql } = require('apollo-server');

module.exports= gql`
type Post{
    id: ID!,
    title: String!,
    body: String!,
    username: String!,
    createdAt: String!
}
type Query {
    getPosts: [Post]
}
`