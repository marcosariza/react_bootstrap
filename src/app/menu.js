import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return(
      <Navbar inverse={true} collapseOnSelect={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" componentClass="span">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#" componentClass="span">
              <Link to="/grid">Grid</Link>
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} componentClass="span"><Link to="/">Home</Link></MenuItem>
              <MenuItem eventKey={3.2} componentClass="span"><Link to="/grid">Grid</Link></MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight={true}>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
  }
}


export {
  Menu
};
