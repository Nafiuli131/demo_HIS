import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Small	size="sm"	300px
Default	None	500px
Large	size="lg"	800px
Extra large	size="xl"	1140px
 */

export default function CommonModal() {
  const [visible, setVisible] = useState(false);

  const btnClose = () => setVisible(false);
  const btnShow = () => setVisible(true);

  return (
    <>
      <button onClick={btnShow} type="button" class="btn btn-dark">
        Open Modal
      </button>
      <Modal size="xl" show={visible} onHide={btnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={btnClose}>
            Close
          </Button>
          <Button variant="success" onClick={btnClose}>
            Save
          </Button>
          <button type="button" class="btn btn-danger">
            Danger
          </button>
          <button type="button" class="btn btn-warning">
            Warning
          </button>
          <button type="button" class="btn btn-info">
            Info
          </button>
          <button type="button" class="btn btn-light">
            Light
          </button>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
