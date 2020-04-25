const express = require('express');
const IndexController = require('./controllers/index');

const router = express.Router();

router.get('/inventory/get-items', IndexController.getItems);
router.post('/inventory/create-items', IndexController.create);


module.exports = router;
