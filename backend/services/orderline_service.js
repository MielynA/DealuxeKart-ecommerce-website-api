const db = require('../db/database');
orderLineService = {}


orderLineService.post = (orderId,productId,quantity) => {
    return db.none('INSERT INTO OrderLine (orderId,productId,quantity) VALUES (${orderId},${productId},${quantity})', 
         {orderId,productId,quantity})
    }

orderLineService.get = (orderId) => {
    return db.one('SELECT * FROM OrderLine WHERE orderId = ${orderId}', {orderId})
}

orderLineService.put = (orderId,productId,quantity) => {
    return db.none('UPDATE OrderLine SET orderId = ${orderId},productId = ${productId},quantity = ${quantity}', 
     {orderId,productId,quantity})
}

orderLineService.delete = (orderId) => {
    return db.none('DELETE FROM OrderLine WHERE orderId = ${orderId}', {orderId})
}

orderLineService.get = () => {
    return db.any('SELECT * FROM OrderLine')
}




module.exports = orderLineService;