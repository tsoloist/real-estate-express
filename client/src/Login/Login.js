import React, {Component} from 'react';
import Internal from '../Layout/InternalPages';
import Aux from '../hoc/Auxilary';
import '../App.css';
import './Login.css';
import Axios from 'axios';

class Login extends Component {
	state = {
		credentials: []
	};

	sendCredentialsHandler = (e) => {
		console.log(e.target);
		Axios.post('/api/login', {
			email: e.target.email.value,
			password: e.target.password.value
		}).then((data) => {
			this.state.credentials.concat(data);
			console.log(data);
		});

	}

	render(){
		return (
			<Internal>
				<Aux>
					<h1>Welcome Back</h1>
				<form onSubmit={this.sendCredentialsHandler}>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type="text" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
						<span className="formhelp">We'll never share your email with anyone else.</span>
					</div>
					<div className="form-group">
						<label htmlFor="loginpwd">Password</label>
						<input type="password" id="loginpwd" name="password" placeholder="Password" />
					</div>
					<button type="submit" className="button-primary">Submit</button>
				</form>
				</Aux>
			</Internal>
		)
	};
}
export default Login;