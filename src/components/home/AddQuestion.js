import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      
        <Modal show={this.props.open} onHide={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
            <Button bsStyle="primary" onClick={this.props.handleClose}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      
    );
  }
}
