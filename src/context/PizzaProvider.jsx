import { useEffect, useState } from "react";
import { PizzaContext } from "./PizzaContext";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  const getPizzas = async () => {
    try {
      const res = await fetch("public/pizzas.json");
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const formatCurrency = (value) => {
    return formatter.format(value);
  };

  // const addToCart = (pizza) => {
  // if (pizza) {
  //   const pizzaByID = { ...pizza, id: pizza.id ? pizza.id.toString() : "" };
  //   setCart([...cart, pizzaByID]);
  // } else {
  //   console.warn("Intento de agregar una pizza nula o indefinida al carrito.");
  // }
  // };

  const addToCart = (pizza) => {
    if (pizza) {
      const pizzaID = pizza.id ? pizza.id.toString() : "";
      setCart((prevCart) => ({
        ...prevCart,
        [pizzaID]: (prevCart[pizzaID] || 0) + 1,
      }));
    } else {
      console.warn(
        "Intento de agregar una pizza nula o indefinida al carrito."
      );
    }
  };

  // const removeFromCart = (id) => {
  //   const newCart = cart.filter((pizza) => pizza.id !== id);
  //   setCart(newCart);
  // };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  // const calculateTotal = () => {
  //   return cart
  //     .reduce((total, pizza) => total + parseFloat(pizza.price), 0)
  //     .toFixed(2);
  // };

  const calculateTotal = () => {
    const total = Object.keys(cart).reduce((acc, pizzaID) => {
      const pizza = pizzas.find((p) => p.id === pizzaID);
      if (pizza) {
        return acc + parseFloat(pizza.price) * cart[pizzaID];
      }
      return acc;
    }, 0);

    return total.toFixed(2);
  };

  const GetCartTotal = () => {
    const cartTotal = formatCurrency(calculateTotal());
    return <span>Total: {cartTotal}</span>;
  };

  const handleAddToCart = (pizza) => {
    const { id, ...rest } = pizza;
    addToCart({ ...rest, id: id ? id.toString() : "" });
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        calculateTotal,
        showPopUp,
        handleAddToCart,
        handleClosePopUp,
        formatCurrency,
        GetCartTotal,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
