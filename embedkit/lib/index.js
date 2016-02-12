/**
  * @module embedkit
  *  
  * Move your app forward with EmbedKit API's
  */

var configuration = require('./configuration'),
    EmbedKitController = require('./Controllers/EmbedKitController');


function initializer(){}

//Main functional components of embedkit
initializer.configuration = configuration;
initializer.EmbedKitController = EmbedKitController;

//Main Models of embedkit

module.exports = initializer;