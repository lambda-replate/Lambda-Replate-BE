module.exports = (req, res, next) => {
        if (req.user) {
            console.log(req.user)
            if (
                req.user.type &&
                req.user.type.includes(type)
                ) {
                next()
            }
            else {
                res.status(401).json('Not Authorized')
            }
        }
        else {
            res.status(401).json('Not Authorized')
        }
}