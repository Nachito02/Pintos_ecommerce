import React from "react";
import Image from "next/image";
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.nav_container}>
        <div>
          <h4>Diseños exclusivos</h4>
          <p>Desde hace mas de 10 años</p>
        </div>

        <div>
          <h4>Categorias</h4>

          <p>Productos</p>
          <p>Promociones</p>
          <p>Nuevos Lanzamientos</p>
        </div>

        <div>
          <h4>Más info</h4>
          <p>Cómo comprar</p>
          <p>Formas de entrega</p>
          <p>Horarios de atencion</p>
          <p>Horarios de atencion</p>
          <p>Posventa</p>
        </div>

        <div>
          <h4>Contactanos</h4>
          <p>1111111</p>
          <p>1111111</p>

          <p>ejemplo@ejemplo.com</p>
          <p>Local San Martin, Buenos Aires</p>
          <p>Posventa</p>
        </div>
      </div>

      <div className={style.cards}>
        <h4>Medios de pago</h4>

        <div>
          <Image
            src={"/assets/pagos/visa.png"}
            width={41}
            height={25}
            alt="visa"
          />
          <Image
            src={"/assets/pagos/mastercard.png"}
            width={41}
            height={25}
            alt="mastercard"
          />
          <Image
            src={"/assets/pagos/amex.png"}
            width={41}
            height={25}
            alt="amex"
          />

          <Image
            src={"/assets/pagos/diners.png"}
            width={41}
            height={25}
            alt="diners"
          />
          <Image
            src={"/assets/pagos/banelco.png"}
            width={41}
            height={25}
            alt="banelco"
          />
          <Image
            src={"/assets/pagos/cabal.png"}
            width={41}
            height={25}
            alt="cabal"
          />
          <Image
            src={"/assets/pagos/naranja.png"}
            width={41}
            height={25}
            alt="naranja"
          />
          <Image
            src={"/assets/pagos/tarjeta-shopping.png"}
            width={41}
            height={25}
            alt="tarjeta-shopping"
          />
          <Image
            src={"/assets/pagos/mercadopago.png"}
            width={41}
            height={25}
            alt="mercadopago"
          />
          <Image
            src={"/assets/pagos/argencard.png"}
            width={41}
            height={25}
            alt="argencard"
          />
          <Image
            src={"/assets/pagos/nativa.png"}
            width={41}
            height={25}
            alt="nativa"
          />
          <Image
            src={"/assets/pagos/pagofacil.png"}
            width={41}
            height={25}
            alt="pagofacil"
          />
          <Image
            src={"/assets/pagos/rapipago.png"}
            width={41}
            height={25}
            alt="rapipago"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
