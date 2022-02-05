import React, {Component} from "react";
import { Link, Redirect } from 'react-router-dom'
import {MenuItems} from './Menuitems'
import './Navbar.css'
import { Button } from "../Button";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
  import { useSelector, useDispatch} from 'react-redux' 

  function Navigationbar () {

    const { username, role } = useSelector((state) => {
        return state.auth;
      });

    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">EMMERCE</NavbarBrand>
            <Nav className="me-auto" navbar>
    {username ? (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          HELLO {username}
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem tag={Link} to="/cart">
            Cart
          </DropdownItem>
          <DropdownItem tag={Link} to="/history-transaction">
            Transaction
          </DropdownItem>
          {role === "admin" && (
            <DropdownItem tag={Link} to="/manage-products">
              Admin
            </DropdownItem>
          )}
          <DropdownItem divider />
          <DropdownItem >Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ) : (
      <>
        <NavItem>
          <NavLink tag={Link} to="/login">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/register">
            Register
          </NavLink>
        </NavItem>
      </>
    )}
  </Nav>   


        </Navbar>
    </div>
    )
  }


export default Navigationbar











