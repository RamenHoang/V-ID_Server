let passport = require('passport');
let passportLocal = require('passport-local');
let UserModel = require('../models/userModel');

let initPassportLocal = () => {
  passport.use(new passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    try {
      let user = await UserModel.findByUsername(username);
      if (!user.comparePassword(password)) {
        return done(null, false);
      }
      return done(false, user);
    } catch (error) {
      console.log(error);
      return done(null, false)
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    UserModel.findUserById(id)
      .then(user => done(null, user))
      .catch(error => done(error, null));
  });
}

module.exports = initPassportLocal;
