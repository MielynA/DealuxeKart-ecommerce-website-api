const app = require('express').Router();
const productService = require ('../services/products_services'); 



//--- CREATE product 
app.post('/', (req,res)=>{
    const {supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl } = req.body; 
    productService.post(supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl).then((data)=>{
            res.json({msg: 'created!'})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })
})

//--- READ/GET product INFO
app.get('/:product_id', (req, res)=>{
    const {product_id} = req.params; 
    if(!product_id){
        res.json({msg : `product ${product_id} does not exist`})
    }
    productService.get(product_id).then((newCust)=>{
        res.json({msg: newCust})
        
    })
    .catch(err=>{
        res.status(404).json({error: err.toString('utf-8')})
    })
})

//--- EDIT product INFO 
app.put('/:product_id', (req,res)=>{
    const {product_id} = req.params; 
    const {supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl} = req.body; 
        productService.put(supplierId, productName,productDesc,unitPrice,color,quantityPerUnit,categoryName,categoryDesc,imgurl).then((data)=>{
            res.json({msg: `product ${product_id} is udpated!`})
        })
        .catch(err=>{
            res.status(404).json({error: err.toString('utf-8')})
        })

})

//--- DELETE product INFO 
app.delete('/:product_id', (req,res)=>{
    const{product_id} = req.params; 
    const {supplierId, productName,productDesc,unitPrice,color,quantity,categoryName,categoryDesc,imgurl} = req.body;
  
        productService.delete(product_id, supplierId, productName,productDesc,unitPrice,color,quantity,categoryName,categoryDesc,imgurl).then(()=>{
            res.json({msg: `product ${product_id} has been deleted`})
        })

    .catch(err=>{   
        res.status(404).json({error: err.toString('utf-8')})
    })
})
module.exports = {productRoutes: app, } 