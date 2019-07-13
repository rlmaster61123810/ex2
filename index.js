const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Nontawat Wutthifaey'))
app.get('/about', (req, res) => res.send('หน้า about'))
app.get('/contact', (req, res) => res.send('หน้า ติดต่อเรา'))
app.get('/test', (req, res) => {
    res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
