const app = require('express').Router();
const customerService = require ('../services/customer_services'); 

//-- CUSTOMER DB LIST: username, password, email, billingAdd, city, state, creditCard

//--- CREATE CUSTOMERS 
app.post('/', (req,res)=>{
    const { username, userPassword, email, billingAdd, city, state, creditCard } = req.body; 
    customerService.custCreate(username, userPassword, email, billingAdd, city, state, creditCard).then(()=>{
            res.json({msg: 'new customer is created!'})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })
})

//--- READ/GET CUSTOMER INFO
app.get('/:cust_id', (req, res)=>{
    const {cust_id} = req.params; 
    if(!cust_id){
        res.json({msg : `customer ${cust_id} does not exist`})
    }
    customerService.custRead(cust_id).then((newCust)=>{
        res.json({msg: newCust})
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- EDIT CUSTOMER INFO 
app.put('/:cust_id', (req,res)=>{
    const {cust_id} = req.params; 
    const {username, userPassword, email, billingAdd, city, state, creditCard} = req.body; 
    customerService.custRead(cust_id).then((data)=>{
        customerService.custUpdate(username, userPassword, email, billingAdd, city, state, creditCard).then(()=>{
            res.json({msg: 'udpated!', data})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })
    })
})

module.exports = {customerRoutes: app, } 