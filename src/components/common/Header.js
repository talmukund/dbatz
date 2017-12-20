import React from 'react';
import 'babel-polyfill';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup, Button, Glyphicon} from 'react-bootstrap';
import './Header.css';
import {hashHistory} from 'react-router';
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    hashHistory.push("/question");
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }
  render() {
    return (<Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="headerMain" href="#">dbatz</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav >
          <NavItem eventKey={1} href="#">
          <Glyphicon glyph="glyphicon glyphicon-bell" />
              Notification
            </NavItem>          
          
        </Nav>
        <Nav eventKey={0} >
          <Navbar.Form>
            <FormGroup controlId="formBasicText" className="mx-sm-12">           
              <FormControl type="text" value={this.state.value} placeholder="Enter text" 
              onChange={this.handleChange} />              
              <Button><Glyphicon glyph="search" /></Button>
            </FormGroup>
          </Navbar.Form>
        </Nav>
        <Nav pullRight >        
        <button className="btn btn-danger navbar-btn">Add Topic</button> 
        <NavDropdown eventKey={3} title="Mukund" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>       
        </Nav>
      </Navbar>);
  }
}

export default Header;