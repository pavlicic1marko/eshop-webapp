import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
      dispatch(logout())
      console.log('logout')
  }

  return (
    <header>
    <Navbar expand="lg" bg='dark' cariant='dark' collapseOnSelect>
      <Container>

        <LinkContainer to='/'>
            <Navbar.Brand >ProShop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <LinkContainer to='/cart'>
                <Navbar.Brand >Cart</Navbar.Brand>
            </LinkContainer>

            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}

            <LinkContainer to='/login'>
                <Navbar.Brand >Login</Navbar.Brand>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>        
    </header>
  )
}

export default Header