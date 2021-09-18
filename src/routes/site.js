const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');
//newsController.index -> lay function index

router.use('/:slug', siteController.search);
router.use('/', siteController.index);


module.exports = router