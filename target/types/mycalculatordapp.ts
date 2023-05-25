export type Mycalculatordapp = {
  "version": "0.1.0",
  "name": "mycalculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ],
      "returns": null
    },
    {
      "name": "add",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "subtract",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "divide",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "multiply",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "greeting",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remainder",
            "type": "i64"
          }
        ]
      }
    }
  ]
};

export const IDL: Mycalculatordapp = {
  "version": "0.1.0",
  "name": "mycalculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ],
      "returns": null
    },
    {
      "name": "add",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "subtract",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "divide",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    },
    {
      "name": "multiply",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "int1",
          "type": "i64"
        },
        {
          "name": "int2",
          "type": "i64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "greeting",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remainder",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
