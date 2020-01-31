'use strict';


const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


let testObject = {name :'bags bags'};

describe('categories Model', () => {

  it('post a new categorie item', () => {
    return mockRequest.post('/api/v1/categories')
      .send(testObject)
      .then(data => {
        let record = data.body;
        Object.keys(testObject).forEach(key => {
          expect(record[key]).toEqual(testObject[key]);
        });
      });
  });

  it('Get items ', () => {
    return mockRequest.get('/api/v1/categories')
      .then(data => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe('object');
      });
  });

});