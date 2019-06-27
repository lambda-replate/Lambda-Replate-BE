
module.exports = (req, res, next) => {
    console.log('inside check required data')
    if (req.body) {
        if (!req.body.is_claimed) {
            res.status(400).json('Please provide is claimed (0 or 1)')
        }
        else {
            next()
        }
    }
    else {
        res.status(400).json('Please provide required data.')
    }
}