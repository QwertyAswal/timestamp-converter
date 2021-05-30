const getDate = (req, res) => {
    const msg = {}
    if (!isNaN(req.params.date))
        req.params.date = parseInt(req.params.date)
    const date = new Date(req.params.date)
    if (date.toUTCString() === 'Invalid Date') {
        msg.error = "Invalid Date"
        res.status(400)
    }
    else {
        msg.unix = date.getTime()
        msg.utc = date.toUTCString()
        res.status(200)
    }
    res.json(msg)
}

module.exports = {
    getDate
}