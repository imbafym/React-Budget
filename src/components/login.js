import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onLogin = this.onLogin.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }
    onLogin(event) {
        const { onTokenChanged } = this.props;
        event.preventDefault();
        console.log(event.target);
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            onTokenChanged(true);
            this.props.history.push('/');
        } else {
            console.log('false');
        }

    }

    render() {
        return (

            <form className="container">
                <div className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control"
                            value={this.state.username}
                            name="username"
                            onChange={this.onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                            name="password"
                            value={this.state.pasword}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block"
                        onClick={this.onLogin}
                    >Sign in</button>
                </div>
            </form>

        );
    }
}

export default Login;