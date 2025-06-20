const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    // we're providing headers(metadata) about our response
    res.writeHead(200, { 'content-type': 'text/html' })
    // we can pass this info, text, html directly to the res.end() but now we pass it to res.body
    res.write('<h1>home page</h1>')
    // indicates that communication is over
    res.end()
   
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
