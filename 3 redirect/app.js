const express = require('express')
const app = express()

app.use('/index', function (request, response) {
  response.redirect('https://xsltdev.ru')
})

app.use('/home', function (request, response) {
    response.redirect('about')
  })

app.use('/about', function (request, response) {
    response.send('<h1>About</h1>')
  })

app.use('/home/bar', function (request, response) {
    response.redirect('about')
})

app.use('/home/about', function (request, response) {
    response.send('<h1>About</h1>')
})

app.use('/home/bar', function (request, response) {
    response.redirect('/about')
  })

app.use('/about', function (request, response) {
    response.send('<h1>About</h1>')
  })

  // переадресация на том же уровне с директорией
app.use('/home/foo/bar', function (request, response) {
    response.redirect('./about')
  })
  // переадресация на уровень выше с директорией
app.use('/home/foo/bar', function (request, response) {
    response.redirect('../about')
  })
  // переадресация на уровень выше
app.use('/home/foo/bar', function (request, response) {
    response.redirect('.')
  })
  // переадресация на 2 уровня выше
app.use('/home/foo/bar', function (request, response) {
    response.redirect('..')
  })

app.listen(3000)