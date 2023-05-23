const mercadopago = require('mercadopago')
import { NextRequest, NextResponse } from 'next/server';

export default function POST(req:NextRequest,res:any) {
  if(req.method === 'POST') {
    console.log('POST')
    mercadopago.configure({
        access_token: process.env.MP_TOKEN
    })

    let preference = {
        items: [
          {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
          },
        ],
      };
  
    mercadopago.preferences
  .create(preference)
  .then(function (response:any) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    const preferenceId:string = response.body.id
    console.log(preferenceId)
     res.json(preferenceId)
  })
  .catch(function (error:any) {
    console.log(error);
  });
  }
 
}