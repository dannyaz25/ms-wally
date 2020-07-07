# ms-wally

El API permite:
    1) asignar de manera aleatoria un numero inicial que no haya sido procesado anteriormente
    2) procesar la secuencia de números que descienden hasta 1
    3) Registrar la cadena y almacenarla
    4) Al realizar el proceso de una cadena validar que se haya alcanzado un numero previamente procesado, de ser ese el caso se puede suspender el proceso y registrar el resultado
    5) Permitir un sistema de consulta que retorne la secuencia de números ascendientes (por ejemplo iniciando en 1) y que muestre una profundidad (por ejemplo 13) y muestre el siguiente resultado



### Installing for development

- tener una conexion local a mongo.
- git clone git@github.com:dannyzeta25/ms-wally.git
- cd ms-wally
- npm install
- npm run dev

## Running the tests

### 1. CREATE TREE
#### request
- method: `POST`
- path: `collatz/create-tree `
```json
{
	"element": 8
}
 ```
 
 #### response 
- status code `200`
```json
{
    "message": "el elemento ya fue procesado",
    "collatzTree": {
        "arrayList": [
            "87",
            "262",
            "131",
            "394",
            "197",
            "592",
            "296",
            "148",
            "74",
            "37",
            "112",
            "56",
            "28",
            "14",
            "7",
            "22",
            "11",
            "34",
            "17",
            "52",
            "26",
            "13",
            "40",
            "20",
            "10",
            "5",
            "16",
            "8",
            "4",
            "2",
            "1"
        ],
        "_id": "5f0448e59025067a38587f29",
        "depth": 31,
        "element": 87,
        "__v": 0
    }
}
```
### 2. GENERATE DEPTH
#### request
- method: `POST`
- path: `collatz/generate-depth`
```json
{
	"depth":5
}
 ```
 
 #### response 
- status code `200`
```json
{
    1         
 \        
  2       
   \      
    4     
     \    
      8   
       \  
        16
}
```


### 3. GET ALL TREE
#### request
- method: `GET`
- path: `collatz/get-all-tree`
```json
{
}
 ```
 
 #### response 
- status code `200`
```json
[
    {
        "arrayList": [
            "87",
            "262",
            "131",
            "394",
            "197",
            "592",
            "296",
            "148",
            "74",
            "37",
            "112",
            "56",
            "28",
            "14",
            "7",
            "22",
            "11",
            "34",
            "17",
            "52",
            "26",
            "13",
            "40",
            "20",
            "10",
            "5",
            "16",
            "8",
            "4",
            "2",
            "1"
        ],
        "_id": "5f0448e59025067a38587f29",
        "depth": 31,
        "element": 87,
        "__v": 0
    },
    {
        "arrayList": [
            "6",
            "3",
            "10",
            "5",
            "16",
            "8",
            "4",
            "2",
            "1"
        ],
        "_id": "5f044c80d712010fe26a3db8",
        "depth": 9,
        "element": 6,
        "__v": 0
    }
]
```

## Deployment

Dockerfile

## Built With

* [NodeJs](https://nodejs.org/dist/latest-v10.x/docs/api/synopsis.html) 

## Versioning

0.0.1

## Authors

Danny Santa Cruz Rojas

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details