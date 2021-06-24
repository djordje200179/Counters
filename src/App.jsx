import React, {Component, Fragment} from 'react';

import Incrementer from './components/incrementer'
import Stopwatch from './components/stopwatch'
import Header from './components/header'

const INCREMENTER = "incrementer";
const STOPWATCH = "stopwatch";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elements: [
				{type: INCREMENTER, key: 1, start: 5, title: '1. бројач'},
				{type: STOPWATCH, key: 2, title: '2. штоперица'}
			]
		};

		this.addIncrementer = this.addIncrementer.bind(this);
		this.addStopwatch = this.addStopwatch.bind(this);
		this.removeElement = this.removeElement.bind(this);
		this.removeAllElements = this.removeAllElements.bind(this);
	}

	addIncrementer() {
		const newElementKey = this.state.elements.length > 0 ? this.state.elements[this.state.elements.length - 1].key + 1 : 1;

		console.log('Adding incrementer with key = ' + newElementKey);

		this.setState({
			elements: [...this.state.elements,
				{type: INCREMENTER, key: newElementKey, start: 0, title: newElementKey + '. бројач'}
			]
		});
	}

	addStopwatch() {
		const newElementKey = this.state.elements.length > 0 ? this.state.elements[this.state.elements.length - 1].key + 1 : 1;

		console.log('Adding stopwatch with key = ' + newElementKey);

		this.setState({
			elements: [...this.state.elements,
				{type: STOPWATCH, key: newElementKey, title: newElementKey + '. штоперица'}
			]
		});
	}

	removeElement(key) {
		console.log('Deleting element with key = ' + key);

		this.setState({
			elements: this.state.elements.filter(value => {
				return value.key !== key;
			})
		});
	}

	removeAllElements() {
		console.log('Deleting all elements');

		this.setState({
			elements: []
		});
	}

	render() {
		return (
			<Fragment>
				<Header count={this.state.elements.length} addCounter={this.addIncrementer} addStopwatch={this.addStopwatch}
				        removeAllElements={this.removeAllElements}/>

				<div className="bg-secondary h-100">
					{this.state.elements.map(element => {
						switch(element.type) {
							case INCREMENTER:
								return(
									<Incrementer key={element.key} start={element.start}
									             removeAction={() => this.removeElement(element.key)}>
										{element.title}
									</Incrementer>
								);
							case STOPWATCH:
								return(
									<Stopwatch key={element.key}
									           removeAction={() => this.removeElement(element.key)}>
										{element.title}
									</Stopwatch>
								);
							default:
								console.error("Unknown type of counter");
								return null;
						}
					})}
				</div>
			</Fragment>
		);
	}
}