# ms-inventory

El API permite gestionar items.


### Installing for development

- git clone git@gitlab.com:culqiteam-v3/ms-inventory.git
- cd ms-inventory
- npm install

## Running the tests

### 1. Create inventory
#### request
- method: `POST`
- path: `inventory/create`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-inventory",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
            "paymentMethod":"credit_card",
            "processor" : "pmc",
            "currency" : "pen",
            "model" : "psp",
            "conditional" : {
                "criteria" : "amount",
                "operator" : "gt",
                "value" : "0"
            },
            "pricing" : {
                "fixedFee" : "30",
                "varFee" : "0.042",
                "taxFee" : "118"
            }
	}
}
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-11T18:52:33.169Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": {
        "migration": {
            "test": {
                "event": null,
                "initiated": null,
                "terminated": null
            },
            "live": {
                "event": null,
                "initiated": null,
                "terminated": null
            }
        },
        "_id": "5e6979c1f2eeb10e00d0244c",
        "createdBy": "userId:5df0479d693132414f0b6807",
        "paymentMethod": "credit_card",
        "processor": "pe",
        "currency": "pen",
        "model": "psp",
        "conditional": {
            "criteria": "amount",
            "operator": "gt",
            "value": 0
        },
        "pricing": {
            "fixedFee": 30,
            "varFee": 0.042,
            "taxFee": 118
        },
        "resource": "charges",
        "operation": "creation",
        "result": "success",
        "slug": "A9wYi1UmaYHqkons",
        "createdAt": "2020-03-11T23:52:33.144Z",
        "updatedAt": "2020-03-11T23:52:33.144Z",
        "__v": 0
    }
}
```
### 2. Update Pricing
#### request
- method: `POST`
- path: `pricing/internal/update`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
			"slug":"YOtnmTDYbTRjxpQD",
			"product":"5e5ef96edb76ce14df7c7a60",
            "paymentMethod":"debit",
            "processor" : "pe",
            "currency" : "usd",
            "model" : "psp",
            "conditional" : {
                "criteria" : "amount",
                "operator" : "gt",
                "value" : "0"
            },
            "pricing" : {
                "fixedFee" : "40",
                "varFee" : "0.042",
                "taxFee" : "118"
            }
	}
}
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-11T15:03:48.701Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": {
        "conditional": {
            "criteria": "amount",
            "operator": "gt",
            "value": 0
        },
        "pricing": {
            "fixedFee": 30,
            "varFee": 0.042,
            "taxFee": 118
        },
        "migration": {
            "test": {
                "event": null,
                "initiated": null,
                "terminated": null
            },
            "live": {
                "event": null,
                "initiated": null,
                "terminated": null
            }
        },
        "_id": "5e68fc613a47357a9c224c0a",
        "createdBy": "userId:5df0479d693132414f0b6807",
        "paymentMethod": "credit_card",
        "processor": "pmc",
        "currency": "pen",
        "model": "psp",
        "resource": "charges",
        "operation": "creation",
        "result": "success",
        "slug": "YOtnmTDYbTRjxpQD",
        "createdAt": "2020-03-11T14:57:37.724Z",
        "updatedAt": "2020-03-11T20:03:48.698Z",
        "__v": 0,
        "productId": "5e5ef96edb76ce14df7c7a60",
        "updatedBy": "userId:5df0479d693132414f0b6807"
    }
}
```


### 3. DELETE Pricing 
#### request
- method: `POST`
- path: `pricing/internal/delete`
```json
{
    "meta": {
        "timestamp": "2019-08-20T12:16:32.942Z-0500",
        "serviceId": "4XpndaSBMngQXu",
         "traceId": "1234567890"
    },
    "data": {
              		"id":"5e68fad6d13b4179590efe25"
    }
}
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "traceId": "1234567890",
        "timestamp": "2019-09-05T17:24:34.113Z-0500",
        "serviceId": "aua9nEMDM7JujB"
    },
    "data": {
            "slug" : "rOy1k0MMDk6zCftz",
            "productId":"5e5d68dbc4bf2949e54c7a8a",
            "paymentMethod":"credit_card",
            "processor" : "vdp_v3",
            "currency" : "pen",
            "model" : "psp",
            "resource" : "charges",
            "operation" : "creation",
            "result" : "success",
            "conditional" : {
                "criteria" : "amount",
                "operator" : "gt",
                "value" : "0"
            },
            "pricing" : {
                "fixedFee" : "30",
                "varFee" : "0.042",
                "taxFee" : "118"
            }
    }
}
```
### 4. List Pricing By Id
#### request
- method: `POST`
- path: `pricing/internal/list-by-id`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
		"id":"5e67babdc1bb856a587c07f1"
	}
}	
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-11T18:29:08.407Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": {
        "conditional": {
            "criteria": "amount",
            "operator": "gt",
            "value": 0
        },
        "pricing": {
            "fixedFee": 30,
            "varFee": 0.042,
            "taxFee": 118
        },
        "migration": {
            "test": {
                "event": null,
                "initiated": null,
                "terminated": null
            },
            "live": {
                "event": null,
                "initiated": null,
                "terminated": null
            }
        },
        "_id": "5e67babdc1bb856a587c07f1",
        "productId": "5e5ef96edb76ce14df7c7a60",
        "paymentMethod": "debit",
        "processor": "vdp_v3",
        "currency": "usd",
        "model": "psp",
        "resource": "charges",
        "operation": "creation",
        "result": "success",
        "slug": "jWP0w6KEmL8X3CVI",
        "createdAt": "2020-03-10T16:05:17.070Z",
        "updatedAt": "2020-03-11T20:00:27.496Z",
        "__v": 0,
        "updatedBy": "userId:5df0479d693132414f0b6807"
    }
}
```
### 5. List Pricing By Slug
#### request
- method: `POST`
- path: `pricing/internal/list-by-slug`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
		"slug":"d3AUIcfz6U9s9BPa"
	}
}	
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-12T18:05:37.912Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": {
        "migration": {
            "test": {
                "event": null,
                "initiated": null,
                "terminated": null
            },
            "live": {
                "event": null,
                "initiated": null,
                "terminated": null
            }
        },
        "createdBy": "userId:5df0479d693132414f0b6807",
        "paymentMethod": "credit_card",
        "processor": "pe",
        "currency": "pen",
        "model": "psp",
        "conditional": {
            "criteria": "amount",
            "operator": "gt",
            "value": 0
        },
        "pricing": {
            "fixedFee": 30,
            "varFee": 0.042,
            "taxFee": 118
        },
        "resource": "charges",
        "operation": "creation",
        "result": "success",
        "slug": "d3AUIcfz6U9s9BPa",
        "createdAt": "2020-03-12T23:05:31.009Z",
        "updatedAt": "2020-03-12T23:05:31.009Z",
        "__v": 0
    }
}
```


### 6. List Pricing By Id of Product
#### request
- method: `POST`
- path: `pricing/internal/list-by-id-product`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
		"productId":"5e5ef96edb76ce14df7c7a60"
	}
}
 ```
 
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-12T18:07:31.674Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": [
        {
            "conditional": {
                "criteria": "amount",
                "operator": "gt",
                "value": 0
            },
            "pricing": {
                "fixedFee": 30,
                "varFee": 0.042,
                "taxFee": 118
            },
            "migration": {
                "test": {
                    "event": null,
                    "initiated": null,
                    "terminated": null
                },
                "live": {
                    "event": null,
                    "initiated": null,
                    "terminated": null
                }
            },
            "_id": "5e6ac03acb09db61af9ce763",
            "createdBy": "userId:5df0479d693132414f0b6807",
            "paymentMethod": "credit_card",
            "processor": "pe",
            "currency": "pen",
            "model": "psp",
            "resource": "charges",
            "operation": "creation",
            "result": "success",
            "slug": "d3AUIcfz6U9s9BPa",
            "createdAt": "2020-03-12T23:05:31.009Z",
            "updatedAt": "2020-03-12T23:07:17.522Z",
            "__v": 0,
            "productId": "5e5ef96edb76ce14df7c7a60",
            "updatedBy": "userId:5df0479d693132414f0b6807"
        }
    ]
}
```


### 7. Create Defaults Pricings
#### request
- method: `POST`
- path: `pricing/internal/create-defaults`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
			"productType":"online",
			"pricings":[
			{  
				"paymentMethod":"credit_card",
	            "processor" : "pe",
	            "currency" : "pen",
	            "model" : "psp",
	            "conditional" : {
	                "criteria" : "amount",
	                "operator" : "gt",
	                "value" : "0"
	            },
	            "pricing" : {
	                "fixedFee" : "30",
	                "varFee" : "0.042",
	                "taxFee" : "118"
	            }
            },	
            {  
	            "paymentMethod":"credit_card",
	            "processor" : "pe",
	            "currency" : "usd",
	            "model" : "psp",
	            "conditional" : {
	                "criteria" : "amount",
	                "operator" : "gt",
	                "value" : "0"
	            },
	            "pricing" : {
	                "fixedFee" : "30",
	                "varFee" : "0.042",
	                "taxFee" : "118"
	            }
            }
				]
          
	}
}
 ```
 


### 8. Update Defaults Pricings
#### request
- method: `POST`
- path: `pricing/internal/update-defaults`
```json
{
      "meta": {
          "timestamp": "2019-11-18T15:16:39.229Z-0500",
          "serviceId": "ms-pricing",
          "request" : {
          	"traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
          	"ipAddress" : "127.0.0.1",
          	"userId": "5df0479d693132414f0b6807"
          }
      },
	"data": {
			"slug":"mkTEuuA6GiKSMh3m",
			"pricings":[
			{  
				"paymentMethod":"credit_card",
	            "processor" : "pe",
	            "currency" : "pen",
	            "model" : "psp",
	            "conditional" : {
	                "criteria" : "amount",
	                "operator" : "gt",
	                "value" : "0"
	            },
	            "pricing" : {
	                "fixedFee" : "30",
	                "varFee" : "0.042",
	                "taxFee" : "118"
	            }
            },	
            {  
	            "paymentMethod":"credit_card",
	            "processor" : "pe",
	            "currency" : "usd",
	            "model" : "psp",
	            "conditional" : {
	                "criteria" : "amount",
	                "operator" : "gt",
	                "value" : "0"
	            },
	            "pricing" : {
	                "fixedFee" : "30",
	                "varFee" : "0.043",
	                "taxFee" : "118"
	            }
            }
				]
          
	}
}
 ```
 #### response 
- status code `200`
```json
{
    "meta": {
        "serviceId": "ms-pricing",
        "timestamp": "2020-03-12T18:01:23.877Z-0500",
        "request": {
            "traceId": "234567d8s9f00a9s8df6sa8fasfa97a8d7f",
            "ipAddress": "127.0.0.1",
            "userId": "5df0479d693132414f0b6807"
        },
        "originId": "ms-pricing"
    },
    "data": {
        "pricings": [
            {
                "paymentMethod": "credit_card",
                "processor": "pe",
                "currency": "pen",
                "model": "psp",
                "conditional": {
                    "criteria": "amount",
                    "operator": "gt",
                    "value": "0"
                },
                "pricing": {
                    "fixedFee": "30",
                    "varFee": "0.042",
                    "taxFee": "118"
                }
            },
            {
                "paymentMethod": "credit_card",
                "processor": "pe",
                "currency": "usd",
                "model": "psp",
                "conditional": {
                    "criteria": "amount",
                    "operator": "gt",
                    "value": "0"
                },
                "pricing": {
                    "fixedFee": "30",
                    "varFee": "0.043",
                    "taxFee": "118"
                }
            }
        ],
        "_id": "5e6abd01e198135e65e33036",
        "productType": "online",
        "createdBy": "userId:5df0479d693132414f0b6807",
        "slug": "mkTEuuA6GiKSMh3m",
        "createdAt": "2020-03-12T22:51:45.505Z",
        "updatedAt": "2020-03-12T23:01:23.875Z",
        "__v": 2,
        "updatedBy": "userId:5df0479d693132414f0b6807"
    }
}
```


## Deployment

Gitlab CI\CD with Docker

## Built With

* [NodeJs](https://nodejs.org/dist/latest-v10.x/docs/api/synopsis.html) 

## Versioning

0.0.1

## Authors

Danny Santa Cruz

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details