const express = require('express')
const multer = require('multer')
const upload = multer()

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/get-file-size', upload.single('testFile'), (req, res) => {
  const { size } = req.file
  res.json({
    size
  })
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
