const postsResolvers = require('./posts');
const usersResolvers = require('./users');

module.export = {
    Query: {
        ...postsResolvers.Query
    }
}