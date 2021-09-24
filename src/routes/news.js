const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController');
//newsController.index -> lay function index

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
