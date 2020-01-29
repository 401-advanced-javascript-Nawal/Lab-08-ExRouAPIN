'use strict';

const server = require('./lib/server.js');
const mongoose = require('mongoose');

// const Categories = require('./models/categories-schema.js');

// const Products = require('./models/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/class08';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology:true });

// for testing 
// const bag = new Categories({name :'bags bags'});

// console.log('bag : ', bag);
// bag.save();
// console.log('after saveing  : ' );

// const product = new Products({price:25,weight:47,quantity_in_stock:12});

// console.log('product : ', product);
// product.save();
// console.log('after saveing  : ' );

server.start();