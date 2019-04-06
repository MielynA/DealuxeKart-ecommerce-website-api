const app = require('express').Router();
const orderLineService = require ('../services/orders_services'); 

//--- CREATE ORDERS 
app.post('/', (req,res) => {
    const {orderId,productId,quantity} = req.body;
   orderLineService.post(orderId,productId,quantity).then(()=>{
       res.json({msg: 'new order line is created!'})
   })
   .catch(err=>{
       res.status(404).json({error: err.toString('utf-8')})
   })
})

//--- READ/GET ORDERS 
app.get('/:orderline_id', (req,res)=>{
    const { orderline_id } = req.params; 
    if(!orderline_id) {
       res.json({msg: `order ${orderline_id} does not exiist` })
    }
    orderLineService.get(orderline_id).then((data)=>{
        res.json({msg: data})
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- UPDATE ORDERS 
app.put('/:orderline_id', (req,res) => {
    const { orderline_id } = req.params;  
    const {orderId,productId,quantity} = req.body;
   orderLineService.put(order_id, orderId,productId,quantity).then(()=>{
       res.json({msg: `${orderline_id} is udpated!`})
   })
   .catch(err=>{
       res.status(404).json({error: err.toString('utf-8')})
   })
})

//--- DELETE ORDERS 
app.delete('/:orderline_id', (req,res)=>{
    const{orderline_id} = req.params; 
    const {orderId,productId,quantity} = req.body;
        orderLineService.delete(orderline_id,orderId,productId,quantity).then(()=>{
            res.json({msg: `${orderline_id} has been deleted`})
        })

    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- GET ALL ORDERLINE
app.get('/', (req,res)=>{
    orderLineService.getAll().then((data)=>{
        res.json({msg: 'Here are the list of all orders are in line', data})
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

module.exports = {orderLineRoutes: app, } 