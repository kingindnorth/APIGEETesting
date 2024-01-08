const btoa = require("btoa")
const {restAPICall} = require("./restAPICall")
const generateAccessToken = async()=>{
    //generate access token
    console.log("1")
const username = ""; 
const password = "";
const credentials = btoa(username+ ':' + password); 
const basicAuth = 'Basic ' + credentials; 
const url = "https://apibankingonesandbox.icicibank.com/clientcredentials/GenerateAccessToken"
const apiRequest = {
    method: "POST",
    url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicAuth 
  },
    body:{
     grant_type:"client_credentials",
  },
    timeout: 30000,
    json: true,
  }
  console.log("2")

const data = await restAPICall(apiRequest)
console.log("6")
return data
}
module.exports = {
generateAccessToken
}