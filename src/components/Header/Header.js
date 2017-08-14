import React, {Component} from 'react';
import {
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="mobile-sidebar-toggler d-lg-none">&#9776;</NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <Nav className="navbar-nav d-md-down-none">
          <NavItem className="px-3">
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Edit Time</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Screenshots</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Reports</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Payments</NavLink>
          </NavItem>
        </Nav>
        <Nav className="navbar-nav ml-auto">
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-question"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-settings"></i></NavLink>
          </NavItem>
          <NavItem>
            <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin" width="35" />
          </NavItem>
          <NavItem className="d-md-down-none">
            <button className="btn btn-link">
              <img src={require('../../views/Icons/Logo/favicon.ico')} alt="logo" width="30" />
              <i className="icon-arrow-down" style={{ marginLeft: 10 }}></i>
            </button>
          </NavItem>
          <NavItem className="d-md-down-none">
          </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header;
