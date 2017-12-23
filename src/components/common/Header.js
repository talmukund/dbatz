import React from "react";
import "babel-polyfill";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormControl,
  FormGroup,
  Button,
  Glyphicon
} from "react-bootstrap";
import "./Header.css";
import { hashHistory } from "react-router";
import AddQuestion from "../home/AddQuestion";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", open: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="headerMain" href="#">
                <span className="navItem">dbatz</span>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Glyphicon
                glyph="glyphicon glyphicon-bell"
                onClick={this.handleClick}
              />
              <span className="navItem">Notification</span>
            </NavItem>
          </Nav>
          <Nav eventKey={0}>
            <Navbar.Form>
              <FormGroup controlId="formBasicText" className="mx-sm-12">
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                  style={{ width: "300px" }}
                />
                <Button style={{ marginLeft: "10px" }}>
                  <Glyphicon glyph="search" />
                </Button>
              </FormGroup>
            </Navbar.Form>
          </Nav>
          <Nav pullRight>
          <button className="btn btn-danger navbar-btn" onClick={this.handleOpen}>Add Topic</button>              
            <NavDropdown
              eventKey={3}
              title={<span className="navItem">dbatz</span>}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        
        <AddQuestion open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default Header;
