import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../Slider/Slider";
import Image from "next/image";
import style from "./Categories.module.css";
const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <h2 className="text-center mt-5">Categorias</h2>

      <div className={style.container}>
        <Slider {...settings} className={style.slider}>
          <div className={style.container_img}>
            <Image
              src={"/assets/categories/oficina.jpg"}
              width={365}
              height={315}
              alt="oficina"
            />
            <div className={style.info}>
              <p>Oficina</p>
            </div>
          </div>

          <div className={style.container_img}>
            <Image
              src={"/assets/categories/bibliotecas.jpg"}
              width={365}
              height={315}
              alt="oficina"
            />
              <div className={style.info}>
              <p>Bibliotecas</p>
            </div>
          </div>
          <div className={style.container_img}>
            <Image
              src={"/assets/categories/mesatv.jpg"}
              width={365}
              height={315}
              alt="oficina"
            />
              <div className={style.info}>
              <p>Mesas para television</p>
            </div>
          </div>
          <div className={style.container_img}>
            <Image
              src={"/assets/categories/sillascategories.jpg"}
              width={365}
              height={315}
              alt="oficina"
            />
               <div className={style.info}>
               <p>Sillas</p>
            </div>
          </div>
          <div className={style.container_img}>
            <Image
              src={"/assets/categories/oficina.jpg"}
              width={365}
              height={315}
              alt="oficina"
            />
              <div className={style.info}>
              <p>Oficinas</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Categories;
