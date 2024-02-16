const URLLIB_REST_CALL = {
    DATA_TYPE: "dataType",
    DATA: "data",
    JSON: "json",
    BODY: "body",
    FORM_DATA: "formData",
  }
  const ENCRYPTION_PAYLOAD = {
    requestId: '',
    service: '',
    encryptedKey: '',
    oaepHashingAlgorithm: '',
    iv: '',
    encryptedData: '',
    clientInfo: '',
    optionalParam: '',
  }
  const REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST'
  };
  const REQUEST_HEADER = {
    'apiKey': '',
    'Content-Type': '',
    'Authorization': '',
    'accept': ''
  };
  module.exports = {
    URLLIB_REST_CALL,
    ENCRYPTION_PAYLOAD,
    REQUEST_HEADER,
    REQUEST_METHOD
  }