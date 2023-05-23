import React, { useState, useContext, useEffect, use } from "react";
import Link from "next/link";
import style from "./Layout.module.css";
import Image from "next/image";
import { Navbar, NavDropdown } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import productContext from "../../context/AppContext/productContext";
import authContext from "../../context/AuthContext/authContext";
const Layout = ({ children }: any) => {
  const ProductContext = useContext(productContext);
  const AuthContext = useContext(authContext)
  const { getAllProducts, allProducts, categories, setCategories, cart } =
    ProductContext;

    const {user,setUser, logout} = AuthContext

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if(cart) {
      setQuantity(cart.length);
    }

    console.log(cart)
  }, [cart]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts) {
      setCategories();
    }
  }, [allProducts]);


  useEffect(() => {
    setUser()
  }, []);

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
            <Image
              priority
              width={120}
              alt="pintos hogar y confort"
              height={120}
              src={"/assets/logopintos.png"}
            />
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
            {!user ? (
              <Link href={"/api/login"}>Acceder</Link>
            ) : 
              <div className={style.info_user}>
               <Image src={user.profile_img} width={50} height={50} alt={user.name}/>
               <Link href={"/"}>{user.name}</Link>
               <Link href={"/api/logout"} onClick={logout}>Cerrar sesion</Link>
               

               </div>
            }
            <Link href={"/cart"} className={style.cart}>
              <p>Carrito</p>
              <FontAwesomeIcon icon={faCartShopping} />
              <p>{quantity}</p>
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

          {categories === null ? (
            <p>Cargando categorías...</p>
          ) : (
            <NavDropdown
              title="Productos"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <div className={style.grid}>
                {categories.map((cat: any, index: number) => (
                  <div key={index}>
                    <NavDropdown.Item>
                      <Link href={`/categories/${cat}`}>{cat}</Link>
                    </NavDropdown.Item>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </div>
                ))}
              </div>
            </NavDropdown>
          )}
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

