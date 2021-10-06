import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuAdmin extends React.Component{
	render(){
		return(
			<div className='menu-admin'>
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