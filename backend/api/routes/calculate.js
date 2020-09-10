const express = require('express');
const router = express.Router();
const Calculations = require('../models/calculate');


router.post('/', (req, res, next) => {
    let result = ''
    try{
        console.log(req.body);
        let arithmeticExpression = req.body.expression;
        result = eval(arithmeticExpression);
        if (result !== undefined) {
            result = result.toFixed(2);
        }
    } catch(e){
        result = "Invalid";
    }
    const responseObject = {
        "success":true,
        "result":result
    }
    // console.log({ success: true, result: result });
    // res.json({ success: true, result: result });
    res.status(201).json(responseObject); 

});


module.exports = router;