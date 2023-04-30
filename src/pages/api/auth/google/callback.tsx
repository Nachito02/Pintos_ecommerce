import passport from 'passport';
import { NextApiRequest, NextApiResponse } from 'next';
const jwt = require('jsonwebtoken')
import { serialize} from 'cookie'

export default function handler(req:any, res: NextApiResponse) {

    passport.authenticate("google", { failureRedirect: "/login", session: false })(req, res, () => {
      // La autenticación fue exitosa, redirecciona al usuario a la página deseada
      const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1h' })
      const serialized = serialize('userToken', token, {
        httpOnly:true,
        secure:false,
        sameSite:'strict',
        maxAge: 1000 * 60 * 60 *24 *30,
        path:'/'
      })
      res.setHeader('Set-Cookie', serialized)
      res.redirect('/');
    });

}
