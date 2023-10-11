import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { RemoveFromCartIcon } from "../components/icons";

export const Carrito = () => {
  const { cart, removeFromCart, formatCurrency, calculateTotal, pizzas, setCart } =
    useContext(PizzaContext);

  const incrementQuantity = (pizzaID) => {
    setCart((prevCart) => ({
      ...prevCart,
      [pizzaID]: (prevCart[pizzaID] || 0) + 1,
    }));
  };

  const decrementQuantity = (pizzaID) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[pizzaID] > 1) {
        newCart[pizzaID] -= 1;
      } else {
        delete newCart[pizzaID];
      }
      return newCart;
    });
  };

  return (
    <div className="container-cart container my-5">
      <h2 className="mb-4">Detalle del pedido:</h2>
      <ListGroup>
        {Object.keys(cart).map((pizzaID) => {
          const pizza = pizzas.find((p) => p.id === pizzaID);
          const quantity = cart[pizzaID];

          return (
            <ListGroup.Item key={pizza.id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center text-capitalize">
                <div>
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                      marginRight: "20px",
                    }}
                  />
                  <span className="h4">{pizza.name}</span>
                </div>
                <div className="button-card">
                  <div className="quantity-buttons">
                    <Button
                      variant="success"
                      className="m-2"
                      onClick={() => incrementQuantity(pizzaID)}
                    >
                      ➕
                    </Button>
                    <h4>{quantity}</h4>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={() => decrementQuantity(pizzaID)}
                    >
                      ➖
                    </Button>
                  </div>
                  <h4 className="text-success text-center">
                    {formatCurrency(pizza.price * quantity)}
                  </h4>
                  <Button
                    variant="danger"
                    className="ml-3"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    <RemoveFromCartIcon />
                    Eliminar
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {Object.keys(cart).length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4>
            <strong>Total a pagar: </strong>
            <span className="text-success h2">
              {formatCurrency(parseFloat(calculateTotal()))}
            </span>
          </h4>
          <Button variant="success" className="button-cart">
            💳 Continuar compra
          </Button>
        </div>
      )}
      {Object.keys(cart).length === 0 && (
        <div className="text-center">
          <p>El carrito está vacío. ¿Por qué no agregar una pizza? 😄</p>
        </div>
      )}
      <div className="float-end">
        <Button variant="warning" className="button-cart">
          <Link to="/">👀 Ver más productos</Link>
        </Button>
      </div>
    </div>
  );
};
