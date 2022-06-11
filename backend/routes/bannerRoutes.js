const express = require('express');
const router = express.Router();
const { getBanner, setBanner, updateBanner, deleteBanner } = require('../controllers/bannerController');

router.route('/').get(getBanner).post(setBanner);
router.route('/:id').put(updateBanner).delete(deleteBanner);


module.exports = router;