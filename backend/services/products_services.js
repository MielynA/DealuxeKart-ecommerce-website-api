const db = require('../db/database');
productService = {}



productService.post = (supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl) => {
    return db.none('INSERT INTO Products (supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl) VALUES (${supplierId},${productName},${productDesc},${unitPrice},${color},${quantityPerUnit},${categoryName}, ${categoryDesc}, ${imgurl})', 
         {supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl})
    }

productService.get = (productId) => {
    return db.one('SELECT * FROM Products WHERE productId = ${productId}', {productId})
}

productService.put = (productId, supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl) => {
    return db.none('UPDATE Products SET supplierId = ${supplierId},productName = ${productName},productDesc = ${productDesc},unitPrice = ${unitPrice},color = ${color},quantityPerUnit = ${quantityPerUnit},categoryName =${categoryName}, categoryDesc = ${categoryDesc}, imgurl = ${imgurl} WHERE productId = ${productId}', 
     {productId, supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl})
}

productService.delete = (productId) => {
    return db.none('DELETE FROM Products WHERE productId = ${productId}', {productId})
}



module.exports = productService;