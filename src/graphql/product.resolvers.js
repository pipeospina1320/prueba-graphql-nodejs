const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const product = (_, { id }) => {
  return service.findOne(id);
};

const allProducts = () => {
  return service.find({});
};

const addProduct = (_, { dto }) => {
  return service.create(dto);
};

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
};

const deleteProduct = async (_, { id }) => {
  return await service.delete(id);
};

const getByCategory = (parent) => {
  const id = parent.dataValues.id;
  return service.getByCategory(id);
};

module.exports = {
  product,
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getByCategory,
};
