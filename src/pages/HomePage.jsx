import React from "react";
import { Products } from "../components/Products";

export const HomePage = () => {
  return (
    <div className="container-home">
      <div className="container text-uppercase">
        <h3><strong>Ofertas por tiempo limitado</strong></h3>
      </div>
      <Products />
    </div>
  );
};
