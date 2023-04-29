const mercadopago = require('mercadopago')

export default function handler(req,res) {

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
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    const preferenceId = response.body.id
    console.log(preferenceId)
    res.json(preferenceId)
  })
  .catch(function (error) {
    console.log(error);
  });
 

}