import React from 'react';
import Internal from '../Layout/InternalPages';
import Aux from '../hoc/Auxilary';
import '../App.css';
import './Login.css';

const Login = () => {
	return (
		<Internal>
			<Aux>
				<h1>Welcome Back</h1>
			<form>
				<div class="form-group">
					<label for="emailpwd">Email address</label>
					<input type="email" id="emailpwd" aria-describedby="emailHelp" placeholder="Enter email" />
					<span class="formhelp">We'll never share your email with anyone else.</span>
				</div>
				<div class="form-group">
					<label for="loginpwd">Password</label>
					<input type="password" id="loginpwd" placeholder="Password" />
				</div>
				<button type="submit" class="button-primary">Submit</button>
			</form>
			</Aux>
		</Internal>
	);
}
export default Login;