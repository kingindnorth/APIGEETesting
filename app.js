const {axiosAPICall} = require("./axios")
const {generateAccessToken} = require("./generateAccessToken")
const sessionStorage = require('sessionstorage');
const { restAPICall } = require("./restAPICall");
const { callBankAPIWithEncryption } = require("./callWithEncryption");

//mdm function
const mdmData = async()=>{
      const options = {
        headers: {
          'apiKey':"vCv3xIht7SnnloZl9QZdJAMRHbd5ARlj",
          'Authorization':''
        },
    };
    const token = await generateAccessToken()
    console.log(token.data.access_token)
    

      sessionStorage.setItem('token',token.data.access_token)
  
      options['headers']['Authorization']= "Bearer " + token.data.access_token
  

        let searchPayload = {

          "requestID": "10029",
      
          "requesterName": "",
      
          "clientSystemName": "",
      
          "requesterLanguage": "",
      
          "FirstName": "",
      
          "LastName": "",
      
          "BirthDate": "",
      
          "PAN": "",
      
          "InfinityId": "",
      
          "MobileNo": "",
      
          "Email": "",
      
          "AccountNo": "055801564203",
      
          "CustId": "",
      
          "Ucic_Value": "",
      
          "Channel_Id": ""
      
      }
    const urlMDM = "https://apibankingonesandbox.icicibank.com/api/v1/MDM/GoldenSearch"

   const mdmResponse = await callBankAPIWithEncryption(urlMDM,searchPayload,options)
  
  // Accessing the IdentificationNumber
// const identificationNumbers = mdmResponse.TCRMService.TxResponse.ResponseObject.TCRMPartyIdentificationBObj.map(
//   identification => identification.IdentificationNumber
// );
   console.log("mdmResponse",JSON.parse(mdmResponse.data.data).TCRMService.TxResponse.ResponseObject.RetailCustomerDetailsBObj.RetailCustomerBObj.TCRMPersonBObj.TCRMPartyIdentificationBObj[1].IdentificationNumber)
       //Destructuring pan number from i_view Response
      //  const {PRODUCT} = tokenRes; 
      //  const panResponse = PRODUCT ? PRODUCT.ACCOUNT[0].PAN_NUMBER || PRODUCT.CARD[0].PAN_NUMBER || PRODUCT.DEMAT[0].PAN_NUMBER || PRODUCT.LOAN[0].PAN_NUMBER || PRODUCT.Others[0].PAN_NUMBER : ""
    //   const panResponse = tokenRes.RetailCustomerDetailsBObj.RetailCustomerBObj.TCRMPersonBObj.TCRMPartyIdentificationBObj.IdentificationNumber
    //   const mobileResponse = tokenRes.RetailCustomerDetailsBObj.RetailCustomerBObj.TCRMPersonBObj.TCRMPartyContactMethodBObj.TCRMContactMethodBObj.ReferenceNumber
    }

  

//000214563286
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