const express = require('express')
const { createWriteStream, createReadStream } = require('fs')
const busboy = require('busboy')

const app = express()

app.use(express.static('public'))

app.post('/upload', (req, res) => {
    const bb = busboy({ headers: req.headers })

    bb.on('file', (name, file, { filename }) => file.pipe(createWriteStream(`files/${filename}`)))

    bb.on('finish', () => res.send('uploaded\n'))

    req.pipe(bb)
})

app.get('/download/:file', (req, res) => {
    const { params: { file } } = req

    // google-logo.png

    const dotIndex = file.indexOf('.')

    const extension = file.substring(dotIndex + 1)

    res.setHeader('Content-Type', `image/${extension}`)

    createReadStream(`files/${file}`).pipe(res)
})

app.listen(8080, () => console.log('server running'))