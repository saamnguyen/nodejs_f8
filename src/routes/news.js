const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController');
//newsController.index -> lay function index

router.use('/:slug', newsController.show);
router.use('/', newsController.index);


module.exports = router