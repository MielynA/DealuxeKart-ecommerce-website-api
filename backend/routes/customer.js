const app = require('express').Router();
const customerService = require ('../services/customer_services'); 

//-- CUSTOMER DB LIST: username, password, email, billingAdd, city, state, creditCard

//--- CREATE CUSTOMERS 
app.post('/', (req,res)=>{
    const { username, password, email, billingAdd, city, state, creditCard, createdAt, updatedAt } = req.body; 
    customerService.post(username, password, email, billingAdd, city, state, creditCard,createdAt, updatedAt).then(()=>{
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
    customerService.get(cust_id).then((newCust)=>{
        res.json({msg: newCust})
        
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- EDIT CUSTOMER INFO 
app.put('/:cust_id', (req,res)=>{
    const {cust_id} = req.params; 
    const {username,password,email,billingAdd,city,state,creditCard,createdAt, updatedAt} = req.body; 
        customerService.put(cust_id, username, password, email, billingAdd, city, state, creditCard,createdAt, updatedAt).then((data)=>{
            res.json({msg: `customer ${cust_id} ${username} is udpated!`})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })

})

//--- DELETE CUSTOMER INFO 
app.delete('/:cust_id', (req,res)=>{
    const{cust_id} = req.params; 
    const {username,password,email,billingAdd,city,state,creditCard,createdAt, updatedAt} = req.body;
  
        customerService.delete(cust_id,username,password,email,billingAdd,city,state,creditCard,createdAt, updatedAt).then(()=>{
            res.json({msg: `customer ${cust_id} ${username} has been deleted`})
        })

    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})
module.exports = {customerRoutes: app, } 