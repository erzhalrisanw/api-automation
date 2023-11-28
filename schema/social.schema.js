const getFriendSchema = {
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
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "confirmed": {
                    "type": "integer"
                  },
                  "user_id": {
                    "type": "integer"
                  },
                  "friend_id": {
                    "type": "integer"
                  },
                  "initiator_id": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "updated_at": {
                    "type": "string"
                  },
                  "user": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "username": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "mutual": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "confirmed": {
                            "type": "integer"
                          },
                          "user_id": {
                            "type": "integer"
                          },
                          "friend_id": {
                            "type": "integer"
                          },
                          "initiator_id": {
                            "type": "integer"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "confirmed",
                          "user_id",
                          "friend_id",
                          "initiator_id",
                          "created_at",
                          "updated_at"
                        ]
                      },
                      "photos": {
                        "type": "array",
                        "items": {}
                      },
                      "address": {
                        "type": "object",
                        "properties": {
                          "regency_id": {
                            "type": "string"
                          },
                          "regency": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "province_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "name",
                              "province_id"
                            ]
                          }
                        },
                        "required": [
                          "regency_id",
                          "regency"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "username",
                      "name",
                      "mutual",
                      "photos",
                      "address"
                    ]
                  }
                },
                "required": [
                  "id",
                  "confirmed",
                  "user_id",
                  "friend_id",
                  "initiator_id",
                  "created_at",
                  "updated_at",
                  "user"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "confirmed": {
                    "type": "integer"
                  },
                  "user_id": {
                    "type": "integer"
                  },
                  "friend_id": {
                    "type": "integer"
                  },
                  "initiator_id": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "updated_at": {
                    "type": "string"
                  },
                  "user": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "username": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "mutual": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "confirmed": {
                            "type": "integer"
                          },
                          "user_id": {
                            "type": "integer"
                          },
                          "friend_id": {
                            "type": "integer"
                          },
                          "initiator_id": {
                            "type": "integer"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "confirmed",
                          "user_id",
                          "friend_id",
                          "initiator_id",
                          "created_at",
                          "updated_at"
                        ]
                      },
                      "photos": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer"
                              },
                              "url": {
                                "type": "string"
                              },
                              "primary": {
                                "type": "integer"
                              },
                              "user_photo_type_id": {
                                "type": "integer"
                              },
                              "user_id": {
                                "type": "integer"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "url",
                              "primary",
                              "user_photo_type_id",
                              "user_id",
                              "created_at",
                              "updated_at"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer"
                              },
                              "url": {
                                "type": "string"
                              },
                              "primary": {
                                "type": "integer"
                              },
                              "user_photo_type_id": {
                                "type": "integer"
                              },
                              "user_id": {
                                "type": "integer"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "url",
                              "primary",
                              "user_photo_type_id",
                              "user_id",
                              "created_at",
                              "updated_at"
                            ]
                          }
                        ]
                      },
                      "address": {
                        "type": "object",
                        "properties": {
                          "regency_id": {
                            "type": "string"
                          },
                          "regency": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "province_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "name",
                              "province_id"
                            ]
                          }
                        },
                        "required": [
                          "regency_id",
                          "regency"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "username",
                      "name",
                      "mutual",
                      "photos",
                      "address"
                    ]
                  }
                },
                "required": [
                  "id",
                  "confirmed",
                  "user_id",
                  "friend_id",
                  "initiator_id",
                  "created_at",
                  "updated_at",
                  "user"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "confirmed": {
                    "type": "integer"
                  },
                  "user_id": {
                    "type": "integer"
                  },
                  "friend_id": {
                    "type": "integer"
                  },
                  "initiator_id": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "updated_at": {
                    "type": "string"
                  },
                  "user": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "username": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "mutual": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "confirmed": {
                            "type": "integer"
                          },
                          "user_id": {
                            "type": "integer"
                          },
                          "friend_id": {
                            "type": "integer"
                          },
                          "initiator_id": {
                            "type": "integer"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "confirmed",
                          "user_id",
                          "friend_id",
                          "initiator_id",
                          "created_at",
                          "updated_at"
                        ]
                      },
                      "photos": {
                        "type": "array",
                        "items": {}
                      },
                      "address": {
                        "type": "object",
                        "properties": {
                          "regency_id": {
                            "type": "string"
                          },
                          "regency": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "province_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "name",
                              "province_id"
                            ]
                          }
                        },
                        "required": [
                          "regency_id",
                          "regency"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "username",
                      "name",
                      "mutual",
                      "photos",
                      "address"
                    ]
                  }
                },
                "required": [
                  "id",
                  "confirmed",
                  "user_id",
                  "friend_id",
                  "initiator_id",
                  "created_at",
                  "updated_at",
                  "user"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "confirmed": {
                    "type": "integer"
                  },
                  "user_id": {
                    "type": "integer"
                  },
                  "friend_id": {
                    "type": "integer"
                  },
                  "initiator_id": {
                    "type": "integer"
                  },
                  "created_at": {
                    "type": "string"
                  },
                  "updated_at": {
                    "type": "string"
                  },
                  "user": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "username": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "mutual": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "confirmed": {
                            "type": "integer"
                          },
                          "user_id": {
                            "type": "integer"
                          },
                          "friend_id": {
                            "type": "integer"
                          },
                          "initiator_id": {
                            "type": "integer"
                          },
                          "created_at": {
                            "type": "string"
                          },
                          "updated_at": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "confirmed",
                          "user_id",
                          "friend_id",
                          "initiator_id",
                          "created_at",
                          "updated_at"
                        ]
                      },
                      "photos": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer"
                              },
                              "url": {
                                "type": "string"
                              },
                              "primary": {
                                "type": "integer"
                              },
                              "user_photo_type_id": {
                                "type": "integer"
                              },
                              "user_id": {
                                "type": "integer"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "url",
                              "primary",
                              "user_photo_type_id",
                              "user_id",
                              "created_at",
                              "updated_at"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer"
                              },
                              "url": {
                                "type": "string"
                              },
                              "primary": {
                                "type": "integer"
                              },
                              "user_photo_type_id": {
                                "type": "integer"
                              },
                              "user_id": {
                                "type": "integer"
                              },
                              "created_at": {
                                "type": "string"
                              },
                              "updated_at": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "url",
                              "primary",
                              "user_photo_type_id",
                              "user_id",
                              "created_at",
                              "updated_at"
                            ]
                          }
                        ]
                      },
                      "address": {
                        "type": "object",
                        "properties": {
                          "regency_id": {
                            "type": "string"
                          },
                          "regency": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "province_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "name",
                              "province_id"
                            ]
                          }
                        },
                        "required": [
                          "regency_id",
                          "regency"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "username",
                      "name",
                      "mutual",
                      "photos",
                      "address"
                    ]
                  }
                },
                "required": [
                  "id",
                  "confirmed",
                  "user_id",
                  "friend_id",
                  "initiator_id",
                  "created_at",
                  "updated_at",
                  "user"
                ]
              }
            ]
          }
        },
        "required": [
          "statusCode",
          "message",
          "data"
        ]
};

const getFriendSuggestionSchema = {
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
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "friend_id": {
              "type": "integer"
            },
            "mutual_friend": {
              "type": "integer"
            },
            "user": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "username": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "mutual": {
                  "type": "null"
                },
                "photos": {
                  "type": "array",
                  "items": {}
                },
                "address": {
                  "type": "object",
                  "properties": {
                    "regency_id": {
                      "type": "string"
                    },
                    "regency": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        },
                        "province_id": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "id",
                        "name",
                        "province_id"
                      ]
                    }
                  },
                  "required": [
                    "regency_id",
                    "regency"
                  ]
                },
                "newrole": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer"
                        },
                        "user_id": {
                          "type": "integer"
                        },
                        "commodity_role_id": {
                          "type": "integer"
                        },
                        "created_at": {
                          "type": "string"
                        },
                        "updated_at": {
                          "type": "string"
                        },
                        "detail": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer"
                            },
                            "name": {
                              "type": "string"
                            },
                            "image": {
                              "type": "string"
                            },
                            "status_id": {
                              "type": "integer"
                            }
                          },
                          "required": [
                            "id",
                            "name",
                            "image",
                            "status_id"
                          ]
                        }
                      },
                      "required": [
                        "id",
                        "user_id",
                        "commodity_role_id",
                        "created_at",
                        "updated_at",
                        "detail"
                      ]
                    }
                  ]
                }
              },
              "required": [
                "id",
                "username",
                "name",
                "mutual",
                "photos",
                "address",
                "newrole"
              ]
            }
          },
          "required": [
            "friend_id",
            "mutual_friend",
            "user"
          ]
        }
      ]
    }
  },
  "required": [
    "statusCode",
    "message",
    "data"
  ]
}

const getFriendSuggestionContactSchema = {
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
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "username": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "birth_date": {
              "type": "string"
            },
            "gender": {
              "type": "integer"
            },
            "language": {
              "type": "string"
            },
            "user_type_id": {
              "type": "integer"
            },
            "status_id": {
              "type": "integer"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "photos": {
              "type": "array",
              "items": {}
            },
            "address": {
              "type": "object",
              "properties": {
                "regency_id": {
                  "type": "string"
                },
                "regency": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "province_id": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "province_id"
                  ]
                }
              },
              "required": [
                "regency_id",
                "regency"
              ]
            }
          },
          "required": [
            "id",
            "username",
            "password",
            "name",
            "phone",
            "email",
            "birth_date",
            "gender",
            "language",
            "user_type_id",
            "status_id",
            "created_at",
            "updated_at",
            "photos",
            "address"
          ]
        }
      ]
    }
  },
  "required": [
    "statusCode",
    "message",
    "data"
  ]
}

const getUserFriendMutualSchema = {
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
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "confirmed": {
              "type": "integer"
            },
            "user_id": {
              "type": "integer"
            },
            "friend_id": {
              "type": "integer"
            },
            "initiator_id": {
              "type": "integer"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "user": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "username": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "mutual": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "confirmed": {
                      "type": "integer"
                    },
                    "user_id": {
                      "type": "integer"
                    },
                    "friend_id": {
                      "type": "integer"
                    },
                    "initiator_id": {
                      "type": "integer"
                    },
                    "created_at": {
                      "type": "string"
                    },
                    "updated_at": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "id",
                    "confirmed",
                    "user_id",
                    "friend_id",
                    "initiator_id",
                    "created_at",
                    "updated_at"
                  ]
                },
                "photos": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer"
                        },
                        "url": {
                          "type": "string"
                        },
                        "primary": {
                          "type": "integer"
                        },
                        "user_photo_type_id": {
                          "type": "integer"
                        },
                        "user_id": {
                          "type": "integer"
                        },
                        "created_at": {
                          "type": "string"
                        },
                        "updated_at": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "id",
                        "url",
                        "primary",
                        "user_photo_type_id",
                        "user_id",
                        "created_at",
                        "updated_at"
                      ]
                    }
                  ]
                },
                "address": {
                  "type": "object",
                  "properties": {
                    "regency_id": {
                      "type": "string"
                    },
                    "regency": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        },
                        "province_id": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "id",
                        "name",
                        "province_id"
                      ]
                    }
                  },
                  "required": [
                    "regency_id",
                    "regency"
                  ]
                }
              },
              "required": [
                "id",
                "username",
                "name",
                "mutual",
                "photos",
                "address"
              ]
            }
          },
          "required": [
            "id",
            "confirmed",
            "user_id",
            "friend_id",
            "initiator_id",
            "created_at",
            "updated_at",
            "user"
          ]
        }
      ]
    }
  },
  "required": [
    "statusCode",
    "message",
    "data"
  ]
}

const postAddFriendSchema = {
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
  getFriendSchema,
  getFriendSuggestionSchema,
  getFriendSuggestionContactSchema,
  getUserFriendMutualSchema,
  postAddFriendSchema
}