// 'use strict';

// const supergoose = require('@code-fellows/supergoose');

// const category = require(`../models/categories-mod/categories-model.js`);

// let testObject = {name :'bags bags'};

// describe('categories Model', () => {
//   it('can create() a new categories', () => {
//     return category.create(testObject)
//       .then(record => {
//         Object.keys(testObject).forEach(key => {
//           expect(record[key]).toEqual(testObject[key]);
//         });
//       });
//   });

//   it('can get() categories', () => {
//     return category.get()
//       .then(foundObject => {
//         Object.keys(testObject).forEach(key => {
//           expect(foundObject[0][key]).toEqual(testObject[key]);
//         });
//       });
//   });

// });