import React, {useState} from "react";
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
        <Navbar className="NavbarItems"  light expand="md">
        <h1 className="navbar-logo" href="/">Cyclist<i className="fab fa-affiliatetheme"></i></h1>
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
            <Button ><a className="sign" href="signup">Sign Up</a></Button>
          </>
        )}
      </Nav>   
      <ul className={'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                        )
                    })} 
                </ul>

    </Navbar>
  </div>
    )
  }


export default Navigationbar











