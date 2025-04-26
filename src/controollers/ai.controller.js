const aiService = require('../services/ai.service')


module.exports.getReview = async (req,res)=>{
const code = req.body.code;
if(!code){
    res.status(400).json({ error: 'Please provide a prompt.' });
    return;
}
const response = await aiService(code);

res.send(response);
}