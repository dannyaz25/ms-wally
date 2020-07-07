const express = require('express');
const IndexController = require('./controllers/index');

const router = express.Router();

router.get('/collatz/get-all-tree', IndexController.getItems);
router.post('/collatz/create-tree', IndexController.create);
router.post('/collatz/generate-depth', IndexController.generateDepth);

module.exports = router;
