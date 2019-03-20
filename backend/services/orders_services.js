const db = require ('../db/database');
orderService = {}

orderService.post = (productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType) => {
   return db.none('INSERT INTO Orders(productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType) VALUES (${productId}, ${customerId}, ${orderDate}, ${orderNum}, ${price}, ${total}, ${color}, ${orderStatus}, ${paymentType}) ',
   {productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType})

}

orderService.get = (orderId) => {
    return db.one('SELECT * FROM Orders WHERE orderId = ${orderId}', {orderId})
}

orderService.put = (productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType) => {
    return db.none('UPDATE Orders SET productId = ${productId}, customerId = ${customerId}, orderDate = ${orderDate}, orderNum = ${orderNum}, price = ${price}, total = ${total}, color = ${color}, orderStatuse = ${orderStatus}, paymentType = ${paymentType} WHERE orderId = ${orderId}', 
     {productId, customerId, orderDate, orderNum, price, total, color, orderStatus, paymentType})
}

orderService.delete = (orderId) => {
    return db.none('DELETE FROM Orders WHERE orderId = ${orderId}', {orderId})
}



module.exports = orderService;