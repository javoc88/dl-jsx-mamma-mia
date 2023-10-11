import React from "react";
import { Button, Modal } from "react-bootstrap";

export const PopUp = ({
  show,
  handleClose,
  onContinueShopping,
  onCheckout,
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static"
    keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>¡Pizza agregada!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tu pizza se ha agregado al carrito con éxito.</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Seguir comprando
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
