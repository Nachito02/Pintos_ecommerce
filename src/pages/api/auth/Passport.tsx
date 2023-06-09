
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
import User from "../model/User";
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google/callback`,
    scope:["profile", "email"],
    session:false,
    passReqToCallback: true

  }, 
  async (req:any,accessToken:any, refreshToken:any, profile:any, done:any) => {
    try {
      // Guardar información del usuario en la base de datos o cualquier otro proceso necesario
      
        const findUser = await User.findOne({email: profile.emails[0].value})
            if(!findUser) {
                const user = await User.create({
                    name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    email: profile.emails[0].value,
                    password:profile.emails[0].value,
                    profile_img: profile.photos[0].value
                  })
                done(null, user);
            } else {
              req.user = findUser
                done(null, findUser);
            }
        
    } catch (err) {
      done(err);
    }
  }));

  passport.serializeUser(function(user:any, cb:any) {
  process.nextTick(function() {
    cb(null, { id: user._id, username: user.name});
  });
});

passport.deserializeUser(function(user:any, cb:any) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


  export default passport