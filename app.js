require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//midelware para servir contenido estatico
app.use(express.static('public'))


// app.get('/',  (req, res) => {
//   res.send('Home page')
// })
// usando handdlebars busca solo la carpeta views y renderiza de acuerdo al archivo llamado
app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Alfredo',
        titulo: 'Curso de node'
    })
  })

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Alfredo',
        titulo: 'Curso de node'
    })
  })

  app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Alfredo',
        titulo: 'Curso de node'
    })
  })

//   app.get('*',  (req, res) => {
//     res.sendFile( __dirname + '/public/404.html')
//   })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })