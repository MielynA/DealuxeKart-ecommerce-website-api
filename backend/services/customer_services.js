const db = require('../db/database');
customerService = {}

customerService.post = (username, password, email, billingAdd, city, state, creditCard,createdAt, updatedAt) => {
    return db.none('INSERT INTO Customer (username, password, email, billingAdd, city, state, creditCard, createdAt, updatedAt) VALUES (${username},${password},${email},${billingAdd},${city},${state},${creditCard}, ${createdAt}, ${updatedAt})', 
         {username, password, email, billingAdd, city, state, creditCard, createdAt, updatedAt})
    }

customerService.get = (customerId) => {
    console.log(db.one('SELECT * FROM Customer WHERE customerId = ${customerId}', {customerId}))
    return db.one('SELECT * FROM Customer WHERE customerId = ${customerId}', {customerId})
}

customerService.put = (customerId, username, password, email, billingAdd, city, state, creditCard, createdAt, updatedAt) => {
    return db.none('UPDATE Customer SET username = ${username}, password = ${password}, email = ${email}, billingAdd = ${billingAdd}, city = ${city}, state = ${state}, creditCard = ${creditCard}, createdAt = ${createdAt}, updatedAt = ${updatedAt} WHERE customerId = ${customerId}', 
     {customerId, username, password, email, billingAdd, city, state, creditCard,createdAt, updatedAt})
}

customerService.delete = (customerId) => {
    return db.none('DELETE FROM Customer WHERE customerId = ${customerId}', {customerId})
}



module.exports = customerService;