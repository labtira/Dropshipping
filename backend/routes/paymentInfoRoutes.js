const express = require('express');
const router = express.Router();
const { getInfo, setInfo } = require('../controllers/paymentInfoController');

router.route('/').get(getInfo).post(setInfo);


module.exports = router;