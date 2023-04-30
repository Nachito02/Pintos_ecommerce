import React from "react";
import style from "./Info.module.css";
import Image from "next/image";

const Info = () => {
  return (
    <div className={style.container}>
      <div>
        <Image
          src={"/assets/entrega.png"}
          width={102}
          height={99}
          alt="envios a todo el pais"
        />
        <div className={style.text_info}>
          <p>Entregamos</p>
          <p>A todo el país</p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/efectivo.png"}
          width={102}
          height={99}
          alt="envios a todo el pais"
        />
        <div className={style.text_info}>
          <p>Descuentos</p>
          <p>en efectivo</p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/tarjeta.png"}
          width={102}
          height={99}
          alt="envios a todo el pais"
        />
        <div className={style.text_info}>
          <p>Cuotas sin interes</p>
          <p>pagando con tarjeta</p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/web.png"}
          width={102}
          height={99}
          alt="envios a todo el pais"
        />
        <div className={style.text_info}>
          <p>Comprá on-line</p>
          <p>fácil y seguro</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
