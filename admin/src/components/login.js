import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

            // Authenticate user with email and password
        // If successful, set redirectToReferrer to true
        // Else, display error message
        if (this.state.email === 'admin@example.com' && this.state.password === '123456') {
            this.setState({
                redirectToReferrer: true,
                error: ''
            }, () => {
                this.props.onLogin();
            });
        } else {
            this.setState({
                error: 'Invalid email or password'
            });
        }
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div className="container mt-5" class="container">
                <h2>This website is for Rumi's admin only</h2>
                {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
                
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" class="input" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
                </div>
                <div className="btn-login-admin">
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
                </form>
            </div>
        );
    }
}

export default Login;
