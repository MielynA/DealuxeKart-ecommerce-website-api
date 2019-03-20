//--- NPM PACKAGES MODULES 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



//--- PATH ROUTER MODULES 
const {customerRoutes} = require('./backend/routes/customer');
const {supplierRoutes} = require('./backend/routes/supplier');
const {productRoutes} = require('./backend/routes/products');
const {orderRoutes} = require('./backend/routes/orders');
const {orderLineRoutes} = require('./backend/routes/orderline');

//--- MIDDLEWARE 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());

app.use('/', customerRoutes);
app.use('/supplier', supplierRoutes);
app.use('/product', productRoutes);
app.use('/orders', orderRoutes);
app.use('/orderline', orderLineRoutes)



//--- RUNNING ENVI SERVER PORT 
app.listen(process.env.PORT || 3002);
console.log('port:', process.env.PORT || 3002 ,'is listening..');