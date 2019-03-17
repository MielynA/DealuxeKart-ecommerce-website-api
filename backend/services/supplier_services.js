const db = require('../db/database');
supplierService = {}
// supplierId, customerId, fName, lName, password, shopName, phone, email, address, city, state, country


supplierService.post = (supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country) => {
    return db.none('INSERT INTO Suppliers (supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country) VALUES (${supplierId},${customerId},${fName},${lName},${supplierPassword},${shopName},${phone}, ${email}, ${address}, ${city},${state}, ${country})', 
         {supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country})
    }

supplierService.get = (supplierId) => {
    return db.one('SELECT * FROM Suppliers WHERE supplierId = ${supplierId}', {supplierId})
}

supplierService.put = (supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country) => {
    return db.none('UPDATE Suppliers SET supplierId= ${supplierId}, customerId = ${customerId}, fName = ${fName}, lName = ${lName}, supplierPassword = ${supplierPassword}, shopName = ${shopName}, phone = ${phone}, email =${email}, address = ${address}, city = ${city}, state = ${state}, country = ${country} WHERE supplierId = ${supplierId}', 
     {supplierId, customerId, fName, lName, supplierPassword, shopName, phone, email, address, city, state, country})
}

supplierService.delete = (customerId) => {
    return db.none('DELETE FROM Suppliers WHERE supplierId = ${supplierId}', {supplierId})
}



module.exports = supplierService;