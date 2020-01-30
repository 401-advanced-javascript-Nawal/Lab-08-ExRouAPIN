'use strict';

const express = require('express');

const category = require('../models/categories-mod/categories-model.js');

const router = express.Router();

// Define our routes
router.get('/categories', getCat);
router.post('/categories', postCat);

function getCat(req, res, next) {
  category.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postCat(req, res, next) {
  category.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;