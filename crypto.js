const {restAPICall} = require("./restAPICall")
const encryptData = async(payload) => {
    let type="";
    if(payload && payload.type){
      type = payload.type
    }
    const options = {
      method: "POST",
      url: "https://vrmuat.niveussolutions.com/cipherservice/api/asymm-encryption",
      body: { message: JSON.stringify(payload),type: payload.type},
      headers: {
        'content-type': 'application/json',
      },
      timeout: 30000,
    };
    return await restAPICall(options)
  };

  const decryptData = async (message, key) => {
  
    const options = {
      method: "POST",
      url: "https://vrmuat.niveussolutions.com/cipherservice/api/asymm-decryption",
      body: { message, key },
      headers: {
        'content-type': 'application/json',
      },
      timeout: 30000,
    };
    return await restAPICall(options)
  };

  module.exports = {
    decryptData,
    encryptData
  }