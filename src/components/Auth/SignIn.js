import React from "react";
import Login from './Login';
import firebase from 'firebase/app';
import {firebaseApp} from '../../base';

class SignIn extends React.Component{
	state = {
		user: '',
	};

	authHandler = async (authData) => {
		const email = authData.user;
		this.setState({user: email});
	};

	authenticate = () => {
		const authProvaider = new firebase.auth['GithubAuthProvider']();
		firebaseApp
			.auth()
			.signInWithPopup(authProvaider)
			.then(this.authHandler)
	};

	render(){
		// if(!this.state.user){
		// 	return <Login authenticate={this.authenticate}/>;
		// }
		return this.props.children;
	};
};

export default SignIn;