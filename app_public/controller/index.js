const PORT = process.env.PORT || 3000
const URL = process.env.URL || 'http://localhost'

const generateHomeComponent = (req, res) => {
    res.render('home', {
        exampleUsage: [`${URL}:${PORT}/api/2015-12-25`, `${URL}:${PORT}/api/1451001600000`],
        exampleOutput: JSON.stringify({ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" })
    })
}

module.exports = { generateHomeComponent }