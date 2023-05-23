// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const jwt = require('jsonwebtoken')


export default function handler(req: NextApiRequest, res: NextApiResponse) {
        const {userToken} = req.cookies
 
        if(!userToken) {
                return
        }
        try {
        const user = jwt.verify(userToken, process.env.JWT_SECRET)

        res.json(user)
        } catch (error:any) {
                throw new Error('no funciona')
        }
}