const app = require('express').Router();
const supplierService = require ('../services/supplier_services'); 



//--- CREATE CUSTOMERS 
app.post('/', (req,res)=>{
    const { supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country } = req.body; 
    supplierService.post(supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country).then(()=>{
            res.json({msg: 'created!'})
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
    supplierService.get(cust_id).then((newCust)=>{
        res.json({msg: newCust})
        
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- EDIT CUSTOMER INFO 
app.put('/:cust_id', (req,res)=>{
    const {cust_id} = req.params; 
    const {username,userPassword,email,billingAdd,city,state,creditCard} = req.body; 
        supplierService.put(cust_id, username, userPassword, email, billingAdd, city, state, creditCard).then((data)=>{
            res.json({msg: `customer ${cust_id} ${username} is udpated!`})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })

})

//--- DELETE CUSTOMER INFO 
app.delete('/:cust_id', (req,res)=>{
    const{cust_id} = req.params; 
    const {username,userPassword,email,billingAdd,city,state,creditCard} = req.body;
  
        supplierService.delete(cust_id,username,userPassword,email,billingAdd,city,state,creditCard).then(()=>{
            res.json({msg: `customer ${cust_id} ${username} has been deleted`})
        })

    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})
module.exports = {supplierRoutes: app, } 