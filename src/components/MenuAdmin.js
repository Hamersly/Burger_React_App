import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import firebase from 'firebase/app';
import PropTypes from 'prop-types';

class MenuAdmin extends React.Component{
	state = {
		photo: '',
		user: '',
	};

	static propTypes = {
		burgers: PropTypes.object,
		deleteBurger: PropTypes.func,
		updateBurger: PropTypes.func,
		addBurger: PropTypes.func,
		loadSamleBurgers: PropTypes.func,
	};

	componentDidMount(){
		firebase.auth().onAuthStateChanged(user => {
			if(user){
				this.authHandler({user});
			}
		});
	}

	authHandler = async (authData) => {
		const {email, photo} = authData.user;
		this.setState({user: email, photo: photo});
	};
	
	render(){
		const {user, photo} = this.state;
		const avatar = photo ? photo : '/images/avatar.png';
		return(
			<div className='menu-admin'>
			{/*{user ? (...) : null }*/}
				<div className='login-header'>
					<div className='avatar'>
						<img src={avatar} alt={user} />
					</div>
					<button 
						className='buttonLogout'
						onClick={this.props.hendleLogout}>Выйти
					</button>
				</div>
				<h2>Управление меню</h2>
				{Object.keys(this.props.burgers).map(key => {
					return <EditBurgerForm 
					key={key}
					index={key} 
					burger={this.props.burgers[key]}
					updateBurger={this.props.updateBurger}
					deleteBurger={this.props.deleteBurger} />
				})}
				<AddBurgerForm addBurger={this.props.addBurger}/>
				<button onClick={this.props.loadSamleBurgers}>Загрузить Бургеры</button>
			</div>
		)
	}
}

export default MenuAdmin;