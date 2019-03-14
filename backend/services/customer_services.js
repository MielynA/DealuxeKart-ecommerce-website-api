const db = require('../db/database');
customerService = {}

customerService.custCreate = (username, userPassword, email, billingAdd, city, state, creditCard) => {
    return db.none('INSERT INTO Customer (username, userPassword, email, billingAdd, city, state, creditCard) VALUES (${username},${userPassword},${email},${billingAdd},${city},${state},${creditCard})', 
         {username, userPassword, email, billingAdd, city, state, creditCard})
    }

customerService.custRead = (customerId) => {
    console.log(db.one('SELECT * FROM Customer WHERE customerId = ${customerId}', {customerId}))
    return db.one('SELECT * FROM Customer WHERE customerId = ${customerId}', {customerId})
}

customerService.custUpdate = (customerId, username, userPassword, email, billingAdd, city, state, creditCard) => {
    return db.none('UPDATE Customer SET username = ${username}, userPassword = ${userPassword}, email = ${email}, billingAdd = ${billingAdd}, city = ${city}, state = ${state}, creditCard = ${creditCard} WHERE customerId = ${customerId}', 
     {customerId, username, userPassword, email, billingAdd, city, state, creditCard})
}

customerService.custDelete = (customerId) => {
    return db.none('DELETE * FROM Customer WHERE customerId = ${customerId}', {customerId})
}



module.exports = customerService;