import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import { Nav, NavItem, Navbar, Footer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Budeget_Container from './Budeget_Container/index';
import Main_Container from './MainPage';

import Login from '../components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import { PublicRoute, AuthRoute } from '../components/AuthRoute';
class App extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            userid: '',
            token: false
        };

        this.onTokenChanged = this.onTokenChanged.bind(this);
    }
    onTokenChanged(newToken) {
        this.setState({
            token: newToken
        })
    }


    render() {

        const loginLink = this.state.token ? (
            <LinkContainer to="/">
                <NavItem onClick={() => this.setState({ token: '' })}>Logout</NavItem>
            </LinkContainer>
        ) : (
                <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            );
        return (
            <div>
                <BrowserRouter>
                    <div>
                        {/* <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    Online Budget
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <LinkContainer to="/budget">
                                        <NavItem>BUDGET</NavItem>
                                    </LinkContainer>
                                </Nav>
                                <Nav pullRight>
                                    {loginLink}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar> */}

                        <Switch>
                            <PublicRoute exact path="/" token={this.state.token} componentRender={{ component: Budeget_Container }} />
                            <PublicRoute path="/login" token={this.state.token} componentRender={{
                                component: Login,
                                onTokenChanged: this.onTokenChanged
                            }} />
                            <AuthRoute exact path="/budget" token={this.state.token} componentRender={{ component: Budeget_Container }} />
                        </Switch>
                        {/* <div className="phantom">
                            <div className="footer-style">
                                <div>&copy; {new Date().getFullYear()} Yiming Fan</div>
                                <br />
                                <div>Powered by yiming.fan1068@gmail.com</div>

                            </div>
                        </div> */}
                    </div>

                </BrowserRouter>

            </div>
        );
    }
}

export default App;
