const valid_schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "statusCode": {
        "type": "integer"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "string"
      },
      "additionalData": {
        "type": "object",
        "properties": {
          "userType": {
            "type": "integer"
          },
          "partnerId": {
            "type": "null"
          }
        },
        "required": [
          "userType",
          "partnerId"
        ]
      }
    },
    "required": [
      "statusCode",
      "message",
      "data",
      "additionalData"
    ]
  }

module.exports = {
    valid_schema,
}