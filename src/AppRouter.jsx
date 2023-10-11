import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PizzaPage, Carrito } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="pizza/:id" element={<PizzaPage />} />
        <Route path="cart" element={<Carrito />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
