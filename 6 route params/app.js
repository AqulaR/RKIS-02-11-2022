const express = require('express')
const app = express()

app.get('/products/:productId', function (
  request,
  response
) {
  response.send('productId: ' + request.params['productId'])
})

app.get(
    '/categories/:categoryId/products/:productId',
    function (request, response) {
      let catId = request.params['categoryId']
      let prodId = request.params['productId']
      response.send(`Категория: ${catId}  Товар: ${prodId}`)
    }
  )

app.get('/book/:pageName.:pageExt', function (
    request,
    response
  ) {
    let pageName = request.params['pageName']
    let pageExt = request.params['pageExt']
    response.send(`Запрошенный файл: ${pageName}.${pageExt}`)
  })
app.listen(3000)
