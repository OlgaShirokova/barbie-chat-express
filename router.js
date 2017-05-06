'use strict'

const router = require('express').Router();
const msgController = require('./controller')

router.get('/messages', msgController.getAll)
router.post('/messages', msgController.postMsg)

module.exports = router;
