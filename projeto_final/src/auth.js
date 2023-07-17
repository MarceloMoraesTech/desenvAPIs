const passport = require('passport');


const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '1058824386616-tl4ng82j47ht348kl2s9pr1jb4nggop8.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3333/auth/google/callback',
  passReqToCallback: true
},

//TODO conect with database of users (it should serach in the database if user is already registered)
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));

passport.serializeUser(function(user,done){
  done(null, user);
});

passport.deserializeUser(function(user,done){
  done(null, user);
});