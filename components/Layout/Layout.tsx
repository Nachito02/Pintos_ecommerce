import Link from "next/link";
import React, { useState } from "react";
import style from "./Layout.module.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e: any) => {
    setShow(!show);
  };
  const hideDropdown = (e: any) => {
    setShow(false);
  };

  return (
    <>
      <header>
        <div className={style.header}>
          <div>
            <Image priority width={120} alt="pintos hogar y confort" height={120} src={'/../public/assets/logopintos.png'} />
          </div>

          <div className={`input-group mb-3 ${style.search}`}>
            <input
              type="text"
              className="form-control"
              placeholder="Que estas buscando?"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>

          <div className={style.header_link}>
            <Link href={"/login"}>Acceder</Link>

            <Link href={"/cart"} className={style.cart}>
              <p>Carrito</p>
              <FontAwesomeIcon icon={faCartShopping} />
               </Link>
           
            
          </div>
        </div>

        <Navbar className={style.container}>
          <Navbar.Brand>
            <Link href={"/"}>Inicio</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link href={"/"}>Quienes somos</Link>
          </Navbar.Brand>

          <NavDropdown
            title="Productos"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <div className={style.grid}>
              <div>
                <NavDropdown.Item>Mesas</NavDropdown.Item>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </div>{" "}
              <div>
                <NavDropdown.Item>Mesas</NavDropdown.Item>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </div>
              <div>
                <NavDropdown.Item>Mesas</NavDropdown.Item>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </div>
              <div>
                <NavDropdown.Item>Mesas</NavDropdown.Item>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </div>
            </div>
          </NavDropdown>

          <Navbar.Brand>
            <Link href={"/"}>Promociones</Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Link href={"/"}>Contacto</Link>
          </Navbar.Brand>
        </Navbar>
      </header>

      {children}

      <Footer />
    </>
  );
};

export default Layout;
