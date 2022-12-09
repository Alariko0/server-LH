const { verifyJwt } = require('../utils/jwt.utils');
const { deleteBearer } = require('../utils/string.utils');

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        const token = deleteBearer(authorization);
        const { sub, email, role } = verifyJwt(token);

        req.user = { _id: sub, email, role };
    } else {
        res.sendStatus(401);
        return;
    }

    next();
};

module.exports = validateToken;