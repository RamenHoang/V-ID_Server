let passportLocal = require('passport-local');
let UserModel = require('../models/userModel');
let uudiv4 = require('uuid/v4');

let initPassportLocal = (passport) => {
  passport.use(new passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    try {
      let user = await UserModel.findByUsername(username);
      if (user === null) {
        return done(null, false);
      }
      if (!user.comparePassword(password)) {
        return done(null, false);
      }

      // Đăng nhập thành công
      return done(false, user);
    } catch (error) {
      console.log(error);
      return done(null, false)
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, {
      id: user._id,
      token: uudiv4()
    });
  });

  passport.deserializeUser((id, done) => {
    // Lưu thông tin user vào trong biến req (request)
    UserModel.findUserById(id.id)
      .then(user => done(null, user))
      .catch(error => done(error, null));
  });
}

module.exports = initPassportLocal;
