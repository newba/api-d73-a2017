const Schema = require('feathers-schema');

const productSchema = new Schema.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    alphanumeric: 'Vous devez entrez que des lettres ou des chiffres',
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  inventoryActual: { type: Number, default: 0 },
});


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [...productSchema.hooks],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
