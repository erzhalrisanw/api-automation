const valid_schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "statusCode": {
        "type": "integer"
      },
      "message": {
        "type": "string"
      }
    },
    "required": [
      "statusCode",
      "message"
    ]
  }

module.exports = {
    valid_schema,
}