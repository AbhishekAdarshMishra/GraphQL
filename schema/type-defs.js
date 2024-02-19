const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }

  type Query {
    users: [User!]!
  }

  enum Nationlaity {
    CANADA
    UK
    INDIA
    BRAZIL
  }
`;

module.exports = { typeDefs };
