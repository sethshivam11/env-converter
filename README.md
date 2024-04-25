# Env Converter

This is a minor project which converts env file to nodemon.json or nodemon.json (env variables) to .env.

> Accepted formats

## Env to Nodemon 

key-value pair seperated by equal sign (=).
Example, NODE_ENV=production

## Nodemon to Env

An JSON object with a key named "env" having value as an object of key-value pairs seperated by colon (:).
Example, 
```JSON
{
    "env": {
        "NODE_ENV": "production"
    }
}
```