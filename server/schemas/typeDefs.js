const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        role: String
        membershipDate: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(email: String!): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(
            firstName: String!
            lastName: String!
            email: String!
            password: String!
        ): Auth
        updateUser(
            _id: ID!
            firstName: String
            lastName: String
            email: String
            password: String
            role: String
        ): User
        deleteUser(_id: ID!): User  
    }      
`;

module.exports = typeDefs;