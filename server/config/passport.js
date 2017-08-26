const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const User = require('../models/user-model')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

/**
 * Sign in using Email and Password.
 */

// passport.use(new LocalStrategy(
//    function (username, password, done) {
//      User.findByUsername(username, function (err, user) {
//        if (err) { return done(err) }
//        if (!user) {
//          return done(null, false, { message: 'Incorrect username or password' })
//        }
//        if (user.password !== password) {
//          return done(null, false, { message: 'Incorrect username or password' })
//        }
//        return done(null, user)
//      })
//    }
//  ))

/**
 * Sign in with Google.
 */
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: '/auth/google/callback',
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  if (req.user) {
    User.findOne({ googleId: profile.id }, (err, existingUser) => {
      if (err) { return done(err) }
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account ' })
        done(err)
      } else {
        User.findById(req.user.id, (err, user) => {
          if (err) { return done(err) }
          user.googleId = profile.id
          user.tokens.push({ kind: 'google tokens', accessToken, refreshToken })
          user.profile.name = user.profile.name || profile.displayName
          user.profile.gender = user.profile.gender || profile._json.gender
          user.profile.picture = user.profile.picture || profile._json.image.url
          user.save((err) => {
            req.flash('info', { msg: 'Google account has been linked.' })
            done(err, user)
          })
        })
      }
    })
  } else {
    User.findOne({ google: profile.id }, (err, existingUser) => {
      if (err) { return done(err) }
      if (existingUser) {
        return done(null, existingUser)
      }
      User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
        if (err) { return done(err) }
        if (existingEmailUser) {
          req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google' })
          done(err)
        } else {
          const user = new User()
          user.email = profile.emails[0].value
          user.google = profile.id
          user.tokens.push({ kind: 'google', accessToken })
          user.profile.name = profile.displanName
          user.profile.gender = profile._json.gender
          user.profile.picture = profile._json.image.url
          user.save((err) => {
            done(err, user)
          })
        }
      })
    })
  }
}))

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/users')
}

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split('/').slice(-1)[0]
  const token = req.user.tokens.find(token => token.kind === provider)
  if (token) {
    next()
  } else {
    res.redirect(`/auth/${provider}`)
  }
}
