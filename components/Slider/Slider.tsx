import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import style from "./Slider.module.css";

export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        padding: "1rem",
        textAlign: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        padding: ".9rem",
        textAlign: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "10px",
    centerMode :true,
    className: style.center,
  };
  return (
    <>


        <Slider {...settings} className={style.slider}>
          <div className={style.container_img}>
            <Image
              src={"/../public/assets/envios.png"}
              width={360}
              height={400}
              alt="imagen"
            />

          </div>

          <div className={style.container_img}>
            <Image
              src={"/../public/assets/silla.png"}
              width={360}
              height={400}
              alt="imagen"
            />
          </div>
          <div className={style.container_img}>
            <Image
              src={"/../public/assets/silla2.png"}
              width={360}
              height={400}
              alt="imagen"
            />
          </div>
          <div className={style.container_img}>
            <Image
              src={"/../public/assets/sillon.png"}
              width={360}
              height={400}
              alt="imagen"
            />
          </div>
          <div className={style.container_img}>
           
            <Image
            priority
              src={"/../public/assets/combo.png"}
              width={360}
              height={400}
              alt="imagen"
            />
          </div>
        </Slider>

    </>
  );
}
