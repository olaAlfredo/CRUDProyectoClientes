const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const productTypeDefs = require("./schemas/productSchema");
const userTypeDefs = require("./schemas/userSchema");
const productResolvers = require("./resolvers/productResolver");
const userResolvers = require("./resolvers/userResolver");

const startServer = async () => {
  await mongoose.connect(
    "mongodb+srv://Andromeda:Tormenta@dbeducation.v650p.mongodb.net/?retryWrites=true&w=majority&appName=dbeducation"
  );

  const typeDefs = [productTypeDefs, userTypeDefs];
  const resolvers = [productResolvers, userResolvers];

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();