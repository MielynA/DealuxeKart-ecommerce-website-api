//--- NPM PACKAGES MODULES 
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
//const checkFirebaseToken = require('../backend/firebase')

const checkFirebaseToken = require('../backend/services/firebase_auth');



//--- PATH ROUTER MODULES 
const {customerRoutes} = require('../backend/routes/customer');
const {PrivateCustomerRoutes} = require('../backend/routes/private_customer');
const {supplierRoutes} = require('../backend/routes/supplier');
const {productRoutes} = require('../backend/routes/products');
const {orderRoutes} = require('../backend/routes/orders');
const {orderLineRoutes} = require('../backend/routes/orderline');

//--- MIDDLEWARE 
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());


app.use('/customer', customerRoutes);
app.use('/supplier', supplierRoutes);
app.use('/product', productRoutes);
app.use('/orders', orderRoutes);
app.use('/orderline', orderLineRoutes)
PrivateCustomerRoutes.use(checkFirebaseToken);
app.use('/privatecustomer',PrivateCustomerRoutes)


module.exports = {app, }