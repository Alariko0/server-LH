const roleValidation = (role) => (req, res, next) => {
    if (req.session.user && req.session.user.role === role) {
        next()
    } else {
        res.render('not-found')
    }
};
const rolesValidationArray = (roles) => (req, res, next) => {
    if (req.session.user && roles.includes(req.session.user.role)) {
        next()
    } else {
        res.render('not-found')
    }
}
module.exports = {
    roleValidation,
    rolesValidationArray
}