//--- NPM PACKAGES MODULES 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



//--- PATH ROUTER MODULES 
const {customerRoutes} = require('./backend/routes/customer');


//--- MIDDLEWARE 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());

app.use('/', customerRoutes);




//--- RUNNING ENVI SERVER PORT 
app.listen(process.env.PORT || 3002);
console.log('port 3002 is listening');