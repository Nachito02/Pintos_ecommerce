// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize} from 'cookie'
const jwt = require('jsonwebtoken')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {userToken} = req.cookies

    if(!userToken) res.redirect('/')
    jwt.verify(userToken, process.env.JWT_SECRET)
    const serialized = serialize('userToken', null, {
      httpOnly:true,
      secure:false,
      sameSite:'strict',
      maxAge:0,
      path:'/'
    })
    res.setHeader('Set-Cookie', serialized)
    res.redirect('/');
}
