const {app, } = require('./backend/app');

//--- RUNNING ENVI SERVER PORT 
app.listen(process.env.PORT || 5001);
console.log('port:', process.env.PORT || 5001 ,'is listening..');