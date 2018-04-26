import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Budeget_Container from './Budeget_Container/index';
import Login from '../components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar inverse collapseOnSelect>
                            <div className="left">
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <LinkContainer to="/">
                                        <NavItem>Online Budget</NavItem>
                                    </LinkContainer>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            </div>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <LinkContainer to="/login">
                                        <NavItem>Login</NavItem>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/" component={Budeget_Container} />

                        </Switch>
                    </div>
                </BrowserRouter>
                
                <footer className="footer">
                    <div>&copy; {new Date().getFullYear()} Yiming Fan</div>
                    <br />
                    <div>Powered by yiming.fan1068@gmail.com</div>
                   
                </footer>
            </div>
        );
    }
}

export default App;
