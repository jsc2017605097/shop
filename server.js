const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const fileUpload = require('express-fileupload');

app.use(fileUpload())
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/api', (req, res) => {
    res.send('api')
})
app.post('/upload', (req, res) => {
    const { myFile } = req.files
    myFile.mv(path.join(__dirname, 'images',myFile.name), error => {
        if (error) {
            return res.status(500).send(`Cannot upload ${myFile.name}, please upload again!`)
        }
        res.status(200).send(path.join('images',myFile.name))
    })
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
})
const port = process.env.PORT || 3001
app.listen(port, () => console.log('Server started...'))    