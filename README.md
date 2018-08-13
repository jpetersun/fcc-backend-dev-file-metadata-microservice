# FCC Timestamp Microservice

Submit a form object that includes a file upload.
When submiting something, receive the file name, file type, and size in bytes within the JSON response.

### Prerequisites

Node.js 8.10+

### Installing

```
yarn install

npm start
```

### Testing

`yarn test`


Local Demo: `localhost:8000`

Live Demo: https://fcc-file-metadata-jp.glitch.glitch.me/

Example Output:
```
{
  name: "sea.jpg",
  type: "image/jpeg",
  size: 190307
}
```
Example Error:
```
{
  statusCode: 400,
  error: "Bad Request",
  message: "File too large"
}
```