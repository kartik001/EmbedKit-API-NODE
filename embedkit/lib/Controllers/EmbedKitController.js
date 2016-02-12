/**
 * embedkit
 *
 * This file was automatically generated for EmbedKit by APIMATIC BETA v2.0 on 02/12/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var EmbedKitController = {

    /**
     * The EmbedKit Embed API
     * @param {string} url    Required parameter: The URL to generate an embed from
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {EmbedModel}
     */
    getEmbed : function(url, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/embed";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "url" : url,
            "api_key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Rate limit exceeded", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 400) {
                    callback({errorMessage: "Missing parameters", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * The EmbedKit Extract API
     * @param {string} url    Required parameter: The URL to extact the details from
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {ExtractModel}
     */
    getExtract : function(url, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/extract";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "url" : url,
            "api_key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 429) {
                    callback({errorMessage: "Rate limit exceeded", errorCode: 429, errorResponse:response.body},null,context);
                } else if (response.statusCode == 400) {
                    callback({errorMessage: "Missing parameters", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "Unexpected error", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = EmbedKitController;