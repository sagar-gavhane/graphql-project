import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }
`;

const resolvers = {
  Query: {
    id() {
      return "abcd1234";
    },
    name() {
      return "Rosendo";
    },
    age() {
      return Math.floor(Math.random() * 90 + 18);
    },
    employed() {
      return false;
    },
    gpa() {
      return Math.random() > 0.5 ? Math.random() : null;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("Server is running...");
});
