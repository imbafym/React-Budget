import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';



class Login extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
       
    }
    
    
    render(){
        return(

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