// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "./auth/Passport";
import conectarDB from "./config/db";

conectarDB()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate('google')(req, res, () => {
   
  });
}
