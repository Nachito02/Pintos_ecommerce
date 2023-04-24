import passport from 'passport';
import { NextApiRequest, NextApiResponse } from 'next';
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  cookieParser()(req, res, () => {
    passport.authenticate("google", { failureRedirect: "/login", session: false })(req, res, () => {
      // La autenticación fue exitosa, redirecciona al usuario a la página deseada
      const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1h' })
      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // solo se envía la cookie en conexiones HTTPS
        sameSite: 'strict',
        maxAge: 3600000, // tiempo de expiración de la cookie, en milisegundos
      });
      res.redirect('/');
    });
  });
}
