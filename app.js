const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')



dotenv.config()

require("./db");

const express = require("express");

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))



require("./config")(app);



const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);


require("./error-handling")(app);

module.exports = app;
