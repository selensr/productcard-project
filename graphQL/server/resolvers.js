const data = require("../../dataset.json");

const resolvers = {
  Query: {
    products: () => data.products,
  },
};

module.exports = resolvers;
