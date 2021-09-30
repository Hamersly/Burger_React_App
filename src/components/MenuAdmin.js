import React from "react";
import AddBurgerForm from "./AddBurgerForm";

class MenuAdmin extends React.Component{
	render(){
		return(
			<div className='menu-admin'>
				<h2>Управление меню</h2>
				<AddBurgerForm addBurger={this.props.addBurger}/>
				<button onClick={this.props.loadSamleBurgers}>Загрузить Бургеры</button>
			</div>
		)
	}
}

export default MenuAdmin;