const app = require('express').Router();
const supplierService = require ('../services/supplier_services'); 



//--- CREATE SUPPLIERS 
app.post('/', (req,res)=>{
    const {customerId, username, supplierPassword, shopName, phone, email, address, country, createdAt, updatedAt, imgurl } = req.body; 
    supplierService.post(customerId, username, supplierPassword, shopName, phone, email, address,country, createdAt, updatedAt,imgurl).then((data)=>{
            res.json({msg: 'created!'})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })
})

//--- READ/GET SUPPLIER INFO
app.get('/:supplier_id', (req, res)=>{
    const {supplier_id} = req.params; 
    if(!supplier_id){
        res.json({msg : `SUPPLIER ${supplier_id} does not exist`})
    }
    supplierService.get(supplier_id).then((newCust)=>{
        res.json({msg: newCust})
        
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- EDIT SUPPLIER INFO 
app.put('/:cust_id', (req,res)=>{
    const {supplier_id} = req.params; 
    const {customerId,username, supplierPassword, shopName, phone, email, address,country, createdAt, updatedAt,imgurl} = req.body; 
        supplierService.put(supplier_id, customerId,username, supplierPassword, shopName, phone, email, address,country, createdAt, updatedAt, imgurl).then((data)=>{
            res.json({msg: `SUPPLIER ${supplier_id} is udpated!`})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })

})

//--- DELETE SUPPLIER INFO 
app.delete('/:supplier_id', (req,res)=>{
    const{supplier_id} = req.params; 
    const {customerId,username, supplierPassword, shopName, phone, email, address,country, createdAt, updatedAt,imgurl} = req.body;
  
        supplierService.delete(supplier_id, customerId,username, supplierPassword, shopName, phone, email, address,country, createdAt, updatedAt,imgurl).then(()=>{
            res.json({msg: `SUPPLIER ${supplier_id} has been deleted`})
        })

    .catch(err=>{   
        res.status(404).json({error: err.toString('utf-8')})
    })
})
module.exports = {supplierRoutes: app, } 