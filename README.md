
# Codex Rest API
This API is in the form of Rest API. Original API is [here](https://github.com/Jaagrav/CodeX)


## API Reference

#### Get output

```https
  GET {your host url}/?language={language}&code={code}
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

## Supported Languages 



```json

{

  "timeStamp": 1672440064864,

  "status": 200,

  "supportedLanguages": [

    {

      "language": "java",

      "info": "openjdk 11.0.17 2022-10-18\nOpenJDK Runtime Environment (build 11.0.17+8-post-Ubuntu-1ubuntu218.04)\nOpenJDK 64-Bit Server VM (build 11.0.17+8-post-Ubuntu-1ubuntu218.04, mixed mode, sharing)\n"

    },

    {

      "language": "cpp",

      "info": "g++ (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n"

    },

    {

      "language": "py",

      "info": "Python 3.6.9\n"

    },

    {

      "language": "c",

      "info": "gcc (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n"

    },

    {

      "language": "js",

      "info": "v16.13.2\n"

    },

    {

      "language": "go",

      "info": "go version go1.10.4 linux/amd64\n"

    },

    {

      "language": "cs",

      "info": "Mono C# compiler version 4.6.2.0\n"

    }

  ]

}

```
