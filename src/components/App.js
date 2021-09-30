import React from "react";
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import samleBurgers from '../sample-burgers'
import Burger from './Burger'

class App extends React.Component{
	state = {
		burgers: {},
		order: {},
	};

	addBurger = burger => {
		// #1.Делаем копию объекта state
		const burgers = {...this.state.burgers};
		// #2.Добавить новый бургер в переменную burgers
		burgers[`burger${Date.now()}`] = burger;
		// #3 Записать новый объект burgers в state
		this.setState({burgers});
	};

	loadSamleBurgers = () => {
		this.setState({burgers: samleBurgers});
	};

	addToOrder = (key) => {
		// #1.Делаем копию объекта state
		const order = {...this.state.order};
		// #2 Добавить ключ к заказу со значением 1, либо обновить текущее значение
		order[key] = order[key] + 1 || 1;
		// #3.3аписать новый объект order в state
		this.setState({order});
	};

	render(){
		return(
			<div className='burger-paradise'>
				<div className='menu'>
					<Header title="Very hot burger" amount={10} hot={true}/>
					<ul className='burgers'>
						{Object.keys(this.state.burgers).map(key => {
							return <Burger 
								key={key}
								index={key}
								addToOrder={this.addToOrder}
								details={this.state.burgers[key]}/>
						})}
					</ul>
				</div>
				<Order />
				<MenuAdmin 
					addBurger={this.addBurger} 
					loadSamleBurgers={this.loadSamleBurgers}/>
			</div>
		)
	};
}

export default App;