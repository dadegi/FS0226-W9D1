// Il nostro primo Class component, più potente dei functional components

// Component è la classe principale dei Class components che viene poi estesa dai NOSTRI Class components
import { Component } from 'react';
import './List.css';

const first = 'Latte';
const second = 'Caffè';
const third = 'Biscotti';

// Il nome della classe determina il nome del component
class List extends Component {
	// la restituzione del JSX nel class component va preceduta dal metodo render()
	render() {
		return (
			<ul>
				<li>{first}</li>
				<li>{second}</li>
				<li>{third}</li>
				<li>{this.props.item}</li>
			</ul>
		);
	}
}

// Solito export
export default List;
