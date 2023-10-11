import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { CartIcon } from "../components/icons";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

export const Header = () => {
  const { GetCartTotal } = useContext(PizzaContext);

  return (
    <>
      <Navbar className="pizza-navbar" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/" className="mr-2">
              Mamma Mía &#x1F355;
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cart" className="mr-2">
              <Button variant="warning">
                <CartIcon />
                <GetCartTotal />
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container-banner d-none d-lg-block">
        <div className="banner-text text-uppercase">
          <p>
            💚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Del horno a tu corazón:
            sabores irresistibles en cada bocado. ¡Bienvenido a la experiencia
            pizza
            perfecta!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Envíos
            gratis sobre $19.990&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛵{" "}
          </p>
        </div>
      </div>
    </>
  );
};
