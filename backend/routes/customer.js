const app = require('express').Router();
const customerService = require ('../services/customer_services'); 

//-- CUSTOMER DB LIST: username, password, email, billingAdd, city, state, creditCard


//--- READ/GET CUSTOMER INFO
app.get('/:cust_id', (req, res)=>{
    const {cust_id} = req.params; 
    if(!cust_id){
        res.json({msg : `customer ${cust_id} does not exist`})
    }
    customerService.get(cust_id).then((newCust)=>{
        res.json({msg: newCust})
        
    })
    // .catch(err=>{
    //     res.status(404).json({error: err.toString()})
    // })
})


module.exports = {customerRoutes: app, } 