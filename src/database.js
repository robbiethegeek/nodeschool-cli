const firebase = require('firebase').initializeApp({
    apiKey: "AIzaSyDmUn5e271iz9qMzXlbQzPlE7n12bP_UKU",
    authDomain: "nodeschool-dev.firebaseapp.com",
    databaseURL: "https://nodeschool-dev.firebaseio.com",
    projectId: "nodeschool-dev",
    storageBucket: "nodeschool-dev.appspot.com",
    messagingSenderId: "554030842616"
  });
module.exports = firebase;