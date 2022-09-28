import React from 'react';

import '../styles/login.css';

import default_light from '../images/default-light.png';
import default_dark from '../images/default-dark.png';

// React Components
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: '',
			username: '',
			password: '',
		}
		this.changeInput = this.changeInput.bind(this)
	}
	changeInput(element) {
		if (element.target.name === 'username') {
			this.setState({ username: element.target.value })
		} else if (element.target.name === 'password') {
			this.setState({ password: element.target.value })
		}
	}
	render() {
		return (
			<form className={ localStorage.getItem('color_mode') === 'light' ? 'light-login-form' : 'dark-login-form'} action="POST">
				{
					localStorage.getItem('color_mode') === 'light' ?
					<img src={default_light} alt="Dyno Platform Default User - Light Mode" /> :
					<img src={default_dark} style={{
						border: '2px solid #2B7A78',
						borderRadius: '100%',
					}} alt="Dyno Platform Default User - Dark Mode" />
				}
				<h1>Login Account</h1>
				<div>
					<i className="fa-solid fa-user" style={{
						fontSize: '1em',
						position: 'absolute',
						top: '',
						botton: '',
						right: '',
						left: '',
						marginTop: '24px',
						marginLeft: '18px',
						color: '#3AAFA9',
					}}></i>
					<input type="text" name="username" value={this.state.username} onChange={this.changeInput} placeholder="Username" minLength="4" maxLength="18" required />
				</div>
				<div>
					<i className="fa-solid fa-lock" style={{
						fontSize: '1em',
						position: 'absolute',
						top: '',
						botton: '',
						right: '',
						left: '',
						marginTop: '24px',
						marginLeft: '18px',
						color: '#3AAFA9',
					}}></i>
					<input type="password" name="password" value={this.state.password} onChange={this.changeInput} placeholder="Password" minLength="8" maxLength="24" required />
				</div>
				<div>
					<input type="submit" value="Login" />
				</div>
				<p>Don't have an account? <span className="register-button" onClick={
					this.props.goToRegisterPage
				}>Register</span></p>
			</form>
		)
	}
}

export default Login;