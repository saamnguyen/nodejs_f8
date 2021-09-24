const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');
//newsController.index -> lay function index

router.get('/:slug', siteController.search);
router.get('/', siteController.index);

module.exports = router;
