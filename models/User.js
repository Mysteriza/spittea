const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Array,
      default: ["user"],
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    occupation: {
      type: String,
      default: null,
    },
    picture_path: {
      type: String,
      default: null,
    },
    verified_badge: {
      type: Boolean,
      default: false,
    },
    account_level: {
      type: Number,
      default: 1,
    },
    profile_view: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Array,
      default: [],
    },
    reported_by: {
      type: Array,
      default: [],
    },
    blocked_by: {
      type: Array,
      default: [],
    },
    saved_post: {
      type: Array,
      default: [],
    },
    wallet: {
      type: Number,
      default: 0,
    },
    fundraised: {
      type: Number,
      default: 0,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
