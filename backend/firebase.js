var admin = require('firebase-admin');

var serviceAccount = require('../../dealuxeKart-server/firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://uploader-2e267.firebaseio.com'
  });
  

module.exports = admin;



