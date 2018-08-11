const express = require('express')
const multer = require('multer')
const boom = require('boom')

// upload a limited sized(5 MB), single file
const upload = multer({ limits: { fileSize: 5000000 } }).single('testFile')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/api/file-metadata', (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(boom.badRequest(err))
    }

    const { originalname, mimetype, size } = req.file
    const name = originalname
    const type = mimetype

    res.json({
      name,
      type,
      size
    })
  })
})

// error handler middleware using boom
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  }

  return res.status(err.output.statusCode).json(err.output.payload)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

module.exports = app
