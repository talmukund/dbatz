import React, { Component, PropTypes } from "react";
import {
  Modal,
  Button,
  FormGroup,
  Form,
  FormControl,
  ControlLabel,
  Col,
  Checkbox
} from "react-bootstrap";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadQuestion} from "../../action/questionAction";


class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, 
    question: {
      title: "",
      tab1: "",
      tab2: ""
    }};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleChange(event){
    const name = event.target.value;

    this.setState({question:name});
  }
  handleClose(event) {
   this.props.dispatch(loadQuestion(this.state))
  }
  render() {
    return (
      <Modal show={this.props.open} onHide={this.props.handleClose}>
        <Modal.Header style={{backgroundColor:"#337ab7"}}>
          <Modal.Title style={{color:"#fff"}}>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
                Question
              </Col>
              <Col sm={10}>
                <FormControl onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup >
              <Col sm={2} componentClass={ControlLabel}>Tab1</Col>
              <Col componentClass={ControlLabel} sm={10}>
                <FormControl onChange={this.handleChange}/>
              </Col>
            </FormGroup> 

            <FormGroup >
              <Col sm={2} componentClass={ControlLabel}>Tab2</Col>
              <Col componentClass={ControlLabel} sm={10}>
                <FormControl name="tab2" placeholder="Tab2" onChange={this.handleChange} />
              </Col>
            </FormGroup>           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
          <Button bsStyle="primary" onClick={this.props.handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddQuestion.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: question => {
      dispatch(loadQuestion(question))
    }
  }
}

  
  export default connect()(AddQuestion);
