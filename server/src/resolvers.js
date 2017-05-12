const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];
const usuarios = [{
  id: 1,
  nombre: 'Juan Carlos Santiago',
}, {
  id: 2,
  nombre: 'Juan Perez',
}];
let nextId = 3;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    usuarios: () => {
      return usuarios;
    },
  },

Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
};