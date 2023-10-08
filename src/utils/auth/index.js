const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
const QGLStrategy = require('./strategies/local-gpl.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(QGLStrategy);
