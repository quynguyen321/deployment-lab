const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '5c813a653e01471e95c9fd4e54f7f946',
  captureUncaught: true,
  captureUnhandledRejections: true
});


rollbar.log("Hello world!");


app.use(express.static('client'))

app.get('/', () =>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4040

app.listen(port, ()=> console.log(`server running on port ${port}`))