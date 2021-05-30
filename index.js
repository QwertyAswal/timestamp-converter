const path = require('path')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const morgan = require('morgan')
const appRouter = require('./app_public/routes/index')

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))

app.set('view engine', 'handlebars')

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('views', path.join(__dirname, 'app_public', 'views'))

app.use(express.static(path.join(__dirname, 'app_public', 'public')))

app.use('', appRouter)

app.use((req, res) => {
    res.status(404)
    res.render('error', {
        err: 'Oops! Page Not Found'
    })
})

app.use((err, req, res, next) => {
    res.status(500)
    res.render('error', {
        err
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`)
    console.log('Press ctrl+c to stop process')
})