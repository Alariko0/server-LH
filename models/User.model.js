const { Schema, model } = require('mongoose')
const { ENUM_ROLES } = require('../const/userRoles')
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      enum: ENUM_ROLES,
      default: 'User',
    }
  },
  {
    timestamps: true,
  }
)

const UserModel = model('User', userSchema)
module.exports = UserModel
