const path = require('path')
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url)
    let contentType = getContentType(filePath) || 'text/html'
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err
        res.writeHead(200, {
            'Content-type': contentType
        })
        res.write(data)
        res.end()

    })
})

const getContentType = (filePath) => {
    let extname = path.extname(filePath)
    if (extname === '.js'){
        return 'text/javascript'
    }
    if (extname === '.ico'){
        return 'image/*'
    }
}

const port = 5000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})