const axios = require("axios")

const axiosAPICall = async (url,postData) => { 
  const data = await axios.post(url, postData)
  return data
}
module.exports = {
  axiosAPICall,
};