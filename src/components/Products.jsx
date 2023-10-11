import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Link } from "react-router-dom";
import { PopUp } from "./PopUp";
import { AddToCartIcon } from "../components/icons";

export const Products = () => {
  const {
    pizzas,
    handleAddToCart,
    handleClosePopUp,
    showPopUp,
    formatCurrency,
  } = useContext(PizzaContext);

  return (
    <Container>
      <Row xs={1} sm={2} md={3}>
        {pizzas.slice(0, 6).map((pizza) => (
          <Col className="mb-4" key={pizza.name}>
            <Card className="pizza-card">
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>
                  <h3 className="text-capitalize">{pizza.name}</h3>
                </Card.Title>
                <div className="card-text text-capitalize">
                  <h5>Ingredientes:</h5>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>&#x1F355; {ingredient}</li>
                    ))}
                  </ul>
                </div>
                <Card.Footer className="text-center">
                  <h3>{formatCurrency(pizza.price)}</h3>
                </Card.Footer>
                <Link to={`/pizza/${pizza.id}`}>
                  <Button variant="warning" className="w-100 mb-2">
                    Más detalles 🔍
                  </Button>
                </Link>
                <Button
                  className="w-100"
                  variant="success"
                  onClick={() => handleAddToCart(pizza)}
                >
                  Añadir <AddToCartIcon />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <PopUp show={showPopUp} handleClose={handleClosePopUp} />
    </Container>
  );
};
