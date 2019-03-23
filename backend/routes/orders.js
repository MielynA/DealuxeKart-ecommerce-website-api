const app = require('express').Router();
const orderService = require ('../services/orders_services'); 

//--- CREATE ORDERS 
app.post('/', (req,res) => {
    const {productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType} = req.body;
   orderService.post(productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType).then(()=>{
       res.json({msg: 'new orders is created!'})
   })
   .catch(err=>{
       res.status(404).json({error: err})
   })
})

//--- READ/GET ORDERS 
app.get('/:order_id', (req,res)=>{
    const { order_id } = req.params; 
    if(!order_id) {
       res.json({msg: `order ${order_id} does not exiist` })
    }
    orderService.get(order_id).then((data)=>{
        res.json({msg: data})
    })
    .catch(err=>{
        res.status(404).json({error: err})
    })
})

//--- UPDATE ORDERS 
app.put('/:order_id', (req,res) => {
    const { order_id } = req.params;  
    const {productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType} = req.body;
   orderService.put(order_id, productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType).then(()=>{
       res.json({msg: `customer ${order_id} is udpated!`})
   })
   .catch(err=>{
       res.status(404).json({error: err})
   })
})

//--- DELETE ORDERS 
app.delete('/:order_id', (req,res)=>{
    const{order_id} = req.params; 
    const {productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType} = req.body;
        orderService.delete(order_id,productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType).then(()=>{
            res.json({msg: `customer ${order_id} has been deleted`})
        })

    .catch(err=>{
        res.status(404).json({error: err})
    })
})
module.exports = {orderRoutes: app, } 