const crypto = require("./crypto")
const {restAPICall} = require("./restAPICall")
const {REQUEST_HEADER,ENCRYPTION_PAYLOAD,REQUEST_METHOD} = require("./constant")

exports.callBankAPIWithEncryption = async function (url, payload, options) {


        /*encrypt the request payload */
        const encryptData = await crypto.encryptData(payload)
            console.log(encryptData.data,"hello")
            
        
            ENCRYPTION_PAYLOAD.encryptedData = encryptData.data.data;
            ENCRYPTION_PAYLOAD.encryptedKey = encryptData.data.key;
            ENCRYPTION_PAYLOAD.oaepHashingAlgorithm = 'NONE';
// console.log("check1")
            // REQUEST_HEADER.apiKey = process.env.API_KEY;
            const apiRequest = {}
            apiRequest["url"] = url;

            if(options && options.headers&&options.headers['Authorization'] && options.headers['apiKey']){
                REQUEST_HEADER["Authorization"] = options.headers['Authorization'];
                REQUEST_HEADER['apiKey'] = options.headers['apiKey'];
                REQUEST_HEADER['Content-Type']= 'application/json'
                REQUEST_HEADER['accept'] = 'application/json'
                ENCRYPTION_PAYLOAD.requestId = "cf0e5e7f-d191-4359-911d-a4c0ab777ee4";
            }else{
                REQUEST_HEADER.apiKey = "";
            }
            
            if (options && options.contentType === '') {
                REQUEST_HEADER["Content-Type"] = options.contentType
            } else {
                REQUEST_HEADER["Content-Type"] = 'application/json';
            }
            if (options && options.method) {
                console.log("checl23")
                apiRequest["method"] = options.method
            } else {
                console.log("check2")
                apiRequest["method"] = REQUEST_METHOD.POST;
                apiRequest["body"] = ENCRYPTION_PAYLOAD;
            }
            if (options && options.token) {
                console.log("checl3")
                REQUEST_HEADER["token"] = options.token;
            }
            console.log("check69")
            apiRequest['headers'] = REQUEST_HEADER;
    
            apiRequest["timeout"] = [30000,30000];
            console.log(apiRequest,"data main")
           const data  = await restAPICall(apiRequest)
           console.log(data,"mdm")
                /*decrypt the response payload */
                const decryptData = await crypto.decryptData(data.data.encryptedData, data.data.encryptedKey)
                console.log(decryptData.data,"decryptedData")

            return decryptData
}