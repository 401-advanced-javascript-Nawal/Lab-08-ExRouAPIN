'use strict';

require('@code-fellows/supergoose');

const Products = require('../models/products-mod/products-model.js');

const product = new Products();

describe(' Products Testing ', () => {

    it(' can get() any product ', () => {
        let newRec = { price: 14 , weight:47 ,quantity_in_stock :10 };

        return product.create(newRec)
            .then(record => {
                return product.get(record._id)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // end of then promise (proItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }) // end of it  get ()


    it(' can create() A new product ', () => {
        let newRec = { price: 14 , weight:47 ,quantity_in_stock :10 };
        return product.create(newRec)
            .then(record => {
                Object.keys(newRec).forEach(key => {
                    expect(record[key]).toEqual(newRec[key]);
                }) // end of forEach 
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it  create ()

    it(' can update() A product ', () => {
        let newRec = { price: 14 , weight:47 ,quantity_in_stock :10 };
        return product.create(newRec)
            .then(record => {
                return product.update(record._id, record)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // nd of then promise (proItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it update ()

    it(' can Delete() A product ', () => {
        let newRec = { price: 14 , weight:47 ,quantity_in_stock :10 };
        return product.create(newRec)
            .then(record => {
                return product.delete(record._id, record)
                    .then(proItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(proItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // nd of then promise (proItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it Delete ()

}) // end of Categories 