'use strict';

const express = require('express');

const product = require('../models/products-mod/products-model.js');

const router = express.Router();

// Define our routes
router.get('/products', getpro);
router.post('/products', postPre);
router.put('/products/id', putPro);
router.delete('/products/id', deletePro);

function getpro(req, res, next) {
  product.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postPre(req, res, next) {
  product.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function putPro(req, res, next) {
  product.update(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}
  
function deletePro(req, res, next) {
  product.delete(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;