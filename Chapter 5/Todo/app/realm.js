import Realm from 'realm';

const Todo = {
  name: 'Todo',
  properties: {
    text: 'string',
    complete: {
      type: 'bool',
      default: false,
    },
  },
};

export default new Realm({ schema: [Todo] });
