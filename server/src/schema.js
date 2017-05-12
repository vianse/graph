import {makeExecutableSchema} from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Channel {
  id: ID!                # "!" indica que es obligatorio
  name: String
}
#Muestra el listado de los usuarios
type Usuario {
  id: ID!
  nombre: String
}
# Muestra el listado de canales
type Query {
  channels: [Channel]
  usuarios: [Usuario]
}

type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
