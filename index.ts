const server = Bun.serve({
  port: 8300,
  fetch(req) {
    console.log('')
    console.log(req.url)
    console.log(req.headers)
    return new Response('hello world')
  }
})

console.log(`Listening on localhost:${server.port}`)
