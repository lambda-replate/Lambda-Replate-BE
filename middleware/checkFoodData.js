
module.exports = (req, res, next) => {
    console.log('inside check required data')
    if (req.body) {
        console.log(req.body)
        if (!req.body.name) {
            res.status(401).json('Please provide name')
        }
        else if (!req.body.description) {
            res.status(401).json('Please provide description')
        }
        else if (!req.body.is_claimed) {
            res.status(401).json('Please provide is_claimed')
        }
        else if (!req.body.pickup_date) {
            res.status(401).json('Please provide pickup_date')
        }
        else if (!req.body.time) {
            res.status(401).json('Please provide time')
        }
        else {
            next()
        }
    }
    else {
        res.status(401).json('Please provide required data.')
    }
}