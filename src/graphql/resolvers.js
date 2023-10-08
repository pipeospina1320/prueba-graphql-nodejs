const {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory } = require('./category.resolvers');

const resolvers = {
  Query: {
    // hello: () => 'dwe',
    // getPerson: (_, args) =>
    //   `Hello my name is ${args.name}, I'm ${args.age} years old`,
    // getInt: (_, args) => args.age,
    // getFloat: () => 1.1,
    // getString: () => 'palabra',
    // getBoolean: () => true,
    // getId: () => '12346',
    // getNumbers: (_, args) => args.numbers,
    // Product
    product,
    allProducts,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
};

module.exports = resolvers;
