const urllib = require('urllib');

const {URLLIB_REST_CALL} = require("./constant")

const restAPICall = async(options) => {
console.log("3")

  options[URLLIB_REST_CALL.DATA_TYPE] = URLLIB_REST_CALL.JSON
  options[URLLIB_REST_CALL.DATA] = options[URLLIB_REST_CALL.BODY] || options[URLLIB_REST_CALL.FORM_DATA]
  delete options[URLLIB_REST_CALL.BODY]
  delete options[URLLIB_REST_CALL.FORM_DATA]

  // options.beforeRequest = (req) => {
  //   req.headers.keepAlive = false;
  //   req.headers.keepSocketAlive = false;
  //   req.headers["Connection"] = "close"
  // }

  console.log("4")
  const data = await urllib.request(options.url, options)
  console.log('5')
  return data
}
module.exports = {
  restAPICall,
};