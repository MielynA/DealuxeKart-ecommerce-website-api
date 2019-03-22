const {app, } = require('./backend/app');

//--- RUNNING ENVI SERVER PORT 
app.listen(process.env.PORT || 3002);
console.log('port:', process.env.PORT || 3002 ,'is listening..');