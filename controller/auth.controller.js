const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { signJwt } = require('../');
const SALT = 10;

const MESSAGE_ERROR_EMAIL = 'Email ya está en uso.';
const MESSAGE_ERROR_LOGIN = 'Email o contraseña no es correcto.';

const SignupController = (req, res, next) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error(MESSAGE_ERROR_EMAIL);
            }
            const saltBcrypt = bcrypt.genSaltSync(SALT);
            const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

            return UserModel.create({ email, password: hashBcrypt });
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            if (err.message === MESSAGE_ERROR_EMAIL) {
                res.status(400).json({ errorMessage: err.message });
            }
            next(err);
        });
};

const LoginController = (req, res, next) => {
    const { email, password } = req.body;

    UserModel.findOne({ email })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.email) });
            } else {
                res.status(400).json(MESSAGE_ERROR_LOGIN);
            }
        })
        .catch(next);
};

module.exports = {
    SignupController,
    LoginController,
};