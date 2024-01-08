const {axiosAPICall} = require("./axios")
const {generateAccessToken} = require("./generateAccessToken")
const sessionStorage = require('sessionstorage')

//mdm function
const mdmData = async()=>{
      const options = {
        headers: {
          'apiKey':"",
          'Authorization':''
        },
    };
    const token = await generateAccessToken()
    console.log(token.data.access_token)
    

      sessionStorage.setItem('token',token.data.access_token)
  
      options['headers']['Authorization']= "Bearer " + token.data.access_token
  

        let searchPayload = {
          "requestID": "",
          "requesterName": "vrm",
          "clientSystemName": "",
          "requesterLanguage": "100",
          "FirstName": "",
          "LastName": "",
          "BirthDate": "",
          "PAN": "",
          "InfinityId": "",
          "MobileNo": "",
          "Email": "",
          "AccountNo": "",
          "CustId": ""
      }
      //encryption
      const url = ""
      const encryptedData = await encrypt(url,searchPayload)
      console.log("encrypted datat",encryptedData.data)
      const payload = {
        "requestId": "cf0e5e7f-d191-4359-911d-a4c0ab777ee4",
        "encryptedKey": encryptedData.data.key,
        "encryptedData": encryptedData.data.data,
        "iv": "",
        "service": "",
        "clientInfo": "",
        "optionalParam": "",
        "oaepHashingAlgorithm": "NONE"
    }
//     const urlMDM = "https://apibankingonesandbox.icicibank.com/api/v1/MDM/GoldenSearch"
//    const mdmResponse = await axiosAPICall(urlMDM,payload)
//    console.log(mdmResponse.data)
  
       //Destructuring pan number from i_view Response
      //  const {PRODUCT} = tokenRes; 
      //  const panResponse = PRODUCT ? PRODUCT.ACCOUNT[0].PAN_NUMBER || PRODUCT.CARD[0].PAN_NUMBER || PRODUCT.DEMAT[0].PAN_NUMBER || PRODUCT.LOAN[0].PAN_NUMBER || PRODUCT.Others[0].PAN_NUMBER : ""
    //   const panResponse = tokenRes.RetailCustomerDetailsBObj.RetailCustomerBObj.TCRMPersonBObj.TCRMPartyIdentificationBObj.IdentificationNumber
    //   const mobileResponse = tokenRes.RetailCustomerDetailsBObj.RetailCustomerBObj.TCRMPersonBObj.TCRMPartyContactMethodBObj.TCRMContactMethodBObj.ReferenceNumber
    }


//encryption
const encrypt = async(url,data)=>{
    // The data you want to send in the POST request
const postData = {
    "message":JSON.stringify(data)
};
const encryptData = await axiosAPICall(url,postData)
return encryptData
}


  
mdmData()