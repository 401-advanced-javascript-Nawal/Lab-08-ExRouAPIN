'use strict';

require('@code-fellows/supergoose');

const Categories = require('../models/categories-mod/categories-model.js');

const category = new Categories();

describe(' Categories Testing ', () => {

    it(' can get() any category ', () => {
        let newRec = { name: 'test category' };

        return category.create(newRec)
            .then(record => {
                return category.get(record._id)
                    .then(catItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(catItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // end of then promise (catItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }) // end of it  get ()


    it(' can create() A new category ', () => {
        let newRec = { name: 'test category' };
        return category.create(newRec)
            .then(record => {
                Object.keys(newRec).forEach(key => {
                    expect(record[key]).toEqual(newRec[key]);
                }) // end of forEach 
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it  create ()

    it(' can update() A category ', () => {
        let newRec = { name: 'test category' };
        return category.create(newRec)
            .then(record => {
                return category.update(record._id, record)
                    .then(catItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(catItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // nd of then promise (catItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it update ()

    it(' can Delete() A category ', () => {
        let newRec = { name: 'test category' };
        return category.create(newRec)
            .then(record => {
                return category.delete(record._id, record)
                    .then(catItem => {
                        Object.keys(newRec).forEach(key => {
                            expect(catItem[key]).toEqual(newRec[key]);
                        }) // end of forEach 
                    }) // nd of then promise (catItem)
            }) // end of then promise (record)
            .catch(e => console.error('ERR', e));
    }); // end of it Delete ()

}) // end of Categories 