const express = require('express');
const moveController = require('../controller/move_controller');

const router = express.Router();

router.post('/', moveController.makeMove);

module.exports = router;
