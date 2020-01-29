'use strict';

const express = require('express');

const food = require('../models/categories-mod/categories-model.js');

const router = express.Router();

// Define our routes
router.get('/categories', getCat);
router.post('/categories', postCat);

function getCat(req, res, next) {
  food.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postCat(req, res, next) {
  food.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;