# API Spec

## Create User :
- Method : POST
- Endpoint : `/regis`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "email" : "string, unique",
    "password" : "string",
    "weightCurrent" : "int",
    "height" : "int",
    "gender" : "string",
    "age" : "int", 
    "goals" : "string",
}
```

- Response :

```json
{
    "status" : "string",
    "message" : "string",
    "data" : {
        "saveUser" : {
            "email" : "string, unique",
            "password" : "string",
            "weightCurrent" : "int",
            "height" : "int",
            "gender" : "string",
            "age" : "int", 
            "goals" : "string",
            "createdAt" : "date",
            "id" : "string, unique",
        }
    }
}
```

## Login User :
- Method : POST
- Endpoint : `/login`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "email" : "string",
    "password" : "string"
}
```

- Response :

```json
{
    "status" : "string",
    "message" : "string",
    "data" : {
        "token" : "string"
    }
}
```

## Display Home Page :
- Method : GET
- Endpoint : `/home/{id}`
- Header : 
    - Accept: application/json
- Response :
```json
{
    "status" : "string",
    "data" : {
        "totalCalories" : "int"
    }
}
```

## Display List Activities :
- Method : GET
- Endpoint : `/home/activities`
- Header : 
    - Accept: application/json
- Response :
```json
{
    "status" : "string",
    "data" : {
        "Activities": "array"
    }
}
```

## Adding Activities :
- Method : POST
- Endpoint : `/home/activities/{id_user}`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "activities" : [{
        "activityName" : "string",
        "duration" : "int",
    }] 
}
```

- Response :

```json
{
    "activities" : [{
        "activityName" : "string",
        "duration" : "int",
    }]
}
```

## Display Food List Recommendation :
- Method : GET
- Endpoint : `/foods/{id}`
- Header : 
    - Accept: application/json
- Response :

```json
{
    "foodLists" : [
        {"breakfast" : {
            "food" : "string",
            "vegetable" : "string",
            "fruit" : "string",
        }},
        {"lunch" : {
            "food" : "string",
            "vegetable" : "string",
            "fruit" : "string",
        }},
        {"dinner" : {
            "food" : "string",
            "vegetable" : "string",
            "fruit" : "string",
        }}
    ]
}

```
