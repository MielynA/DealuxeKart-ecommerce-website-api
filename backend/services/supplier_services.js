const db = require('../db/database');
supplierService = {}



supplierService.post = (customerId, username, supplierPassword, shopName, phone, email, address, country) => {
    return db.none('INSERT INTO Suppliers (customerId, username, supplierPassword, shopName, phone, email, address, country) VALUES (${customerId},${username},${supplierPassword},${shopName},${phone},${email},${address},${country}) RETURNING supplierId', 
         {customerId, username, supplierPassword, shopName, phone, email, address, country})
    }

supplierService.get = (supplierId) => {
    return db.one('SELECT * FROM Suppliers WHERE supplierId = ${supplierId}', {supplierId})
}

supplierService.put = (supplierId, customerId, username, supplierPassword, shopName, phone, email, address, country) => {
    return db.none('UPDATE Suppliers SET customerId = ${customerId}, username = &{username}, supplierPassword = ${supplierPassword}, shopName = ${shopName}, phone = ${phone}, email =${email}, address = ${address}, country = ${country} WHERE supplierId = ${supplierId}', 
     {supplierId, customerId, username, supplierPassword, shopName, phone, email, address,country})
}

supplierService.delete = (supplierId) => {
    return db.none('DELETE FROM Suppliers WHERE supplierId = ${supplierId}', {supplierId})
}



module.exports = supplierService;