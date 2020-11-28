const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://socialape-8f612.firebaseio.com',
  storageBucket: 'socialape-8f612.appspot.com'
});

const db = admin.firestore();

module.exports = { admin, db };
