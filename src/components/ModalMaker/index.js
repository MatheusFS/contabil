import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

// import './styles.css';

function ModalMaker({ btn, title, body, action }){

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div>
        <div onClick={handleShow}>{btn}</div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ body }</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={action}>
                Confirmar
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default ModalMaker;