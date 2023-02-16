
# Codex Rest API
This API is in the form of Rest API. Original API is [here](https://github.com/Jaagrav/CodeX)


## API Reference

#### Get output

```https
  GET https://codex-api16562.herokuapp.com/?language={language}&code={code}
```

| Parameter | Type     | Description                |Example|
| :-------- | :------- | :------------------------- |:------------------------- |
| `language` | `string` | **Required**. |`js`|
| `code` | `string` | **Required**. |`console.log("Hello World")`|

 ##Example Output
 ```http
 {
"output": "\nHello World\n",
"language": "js",
"status": 200
}
 ```


