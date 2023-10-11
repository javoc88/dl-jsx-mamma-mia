import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import { Link, useParams } from "react-router-dom";
import { PopUp } from "../components/PopUp";

export const PizzaPage = () => {
  const {
    pizzas,
    handleAddToCart,
    handleClosePopUp,
    showPopUp,
    formatCurrency,
  } = useContext(PizzaContext);

  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return (
      <div>
        Error 404 <br /> Pizza no encontrada
      </div>
    );
  }

  return (
    <div className="pb-5 mb-5">
      <Container className="mt-5">
        <Row>
          <Col className="pizza-img" md={6}>
            <img src={pizza.img} alt={pizza.name} className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="pizza-hero-card">
              <h2 className="mb-4 text-capitalize">{pizza.name}</h2>
              <hr />
              <p>{pizza.desc}</p>
              <p>
                <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
              </p>
              <p>
                <strong>Precio:</strong> {formatCurrency(pizza.price)}
              </p>
            </div>
            <div className="float-end">
              <Button
                variant="success"
                className="button-cart"
                onClick={() => handleAddToCart(pizza)}
              >
                Agregar al Carrito
              </Button>
              <Button variant="warning" className="button-cart">
                <Link to="/">👀 Ver más productos</Link>
              </Button>
            </div>
          </Col>
        </Row>

        <PopUp show={showPopUp} handleClose={handleClosePopUp} />
      </Container>
    </div>
  );
};
