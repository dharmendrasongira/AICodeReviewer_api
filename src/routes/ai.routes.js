const  express = require('express');
const aiController = require('../controollers/ai.controller.js');

const router =express.Router();

router.post('/get-review', aiController.getReview);



module.exports =router;