const router = require("express").Router();
const Users = require("../db/models/Users");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.serializeUser((user, done) => {
  done(null, {
    email: user.email
  });
});

passport.deserializeUser((user, done) => {});
