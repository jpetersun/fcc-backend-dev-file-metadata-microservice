const chai = require('chai')
const should = chai.should()
const app = require('../index')
const request = require('supertest')

describe('POST /api/file-metadata', () => {
  it('should respond with image file metadata', done => {
    request(app)
      .post('/api/file-metadata')
      .attach('testFile', `${__dirname}/files/sea.jpg`)
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.name.should.equal('sea.jpg')
        res.body.size.should.equal(190307)
        res.body.type.should.equal('image/jpeg')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })

  it('should respond with an error', done => {
    request(app)
      .post('/api/file-metadata')
      .attach('testFile', `${__dirname}/files/paul-morris-212014.jpg`)
      .then(res => {
        res.status.should.equal(400)
        res.type.should.equal('application/json')
        res.body.message.should.equal('File too large')
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})

describe('POST /api/file-metadata', () => {
  it('should respond with text file metadata', done => {
    request(app)
      .post('/api/file-metadata')
      .attach('testFile', `${__dirname}/files/test.txt`)
      .then(res => {
        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.name.should.equal('test.txt')
        res.body.type.should.equal('text/plain')
        res.body.size.should.equal(3144)
        done()
      })
      .catch(err => {
        console.error(err)
      })
  })
})
