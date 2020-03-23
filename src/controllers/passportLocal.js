let passportLocal = require('passport-local');
let UserModel = require('../models/userModel');

let initPassportLocal = (passport) => {
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

let initModulePassportLocal = (passport) => {
  passport.use(new passportLocal.Strategy({
    usernameField: 'hostId',
    passwordField: 'moduleId',
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    try {
      let user = await UserModel.findUserById(username);
      if (user) {
        return done(false, password);
      }
    } catch (error) {
      console.log(error);
      return done(null, false)
    }
  }));

  passport.serializeUser((password, done) => {
    done(null, password);
  });

  passport.deserializeUser((password, done) => {
    try {
      done(null, password);
    } catch (error) {
      done(error, null);
    }
  });
}

module.exports = {
  initPassportLocal: initPassportLocal,
  initModulePassportLocal: initModulePassportLocal
}
