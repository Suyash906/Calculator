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

    const newCalculation = new Calculations({
        expression: req.body.expression,
        name: req.body.name,
        email: req.body.email,
        result: result
    });

    newCalculation.save().then( (calculation, error) => {
        if(error){
            const responseObject = {
                "success":false,
                "error":error
            }
            res.status(500).json(responseObject); 
        }
    }).then( (latestCalculations, error) => {
        let query = Calculations.find({}, null, {limit: 10, sort: {'date': -1}});
        query.exec( (err, docs) => {
            if (!err){
                const responseObject = {
                    "success":true,
                    "result":result,
                    "calculations":docs
                }
                res.status(200).json(responseObject);
            } else {
                const responseObject = {
                    "success":false,
                    "error":err
                }
                res.status(500).json(responseObject);
            }
        });

    });



    // res.status(201).json(responseObject); 

});


module.exports = router;