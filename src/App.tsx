import { Component, Fragment } from "react";
import autobind from "auto-bind";
import Incrementer from "./components/incrementer";
import Stopwatch from "./components/stopwatch";
import Header from "./components/header";

interface AppState {
	elements: Array<CounterData>
}

enum CounterType {
	Incrementer,
	Stopwatch
}

type CounterData = {
	type: CounterType;
	key: number;
	title: string;
}

export default class App extends Component<any, AppState> {
	public constructor(props: any) {
		super(props);
		autobind(this);

		this.state = {
			elements: [
				{ type: CounterType.Incrementer, key: 1, title: "1. бројач" },
				{ type: CounterType.Stopwatch, key: 2, title: "2. штоперица" }
			]
		};
	}

	private getNewKey() {
		let length = this.state.elements.length;

		return length !== 0 ? this.state.elements[length - 1].key + 1 : 1;
	}

	private addCounter(type: CounterType) {
		const newElementKey = this.getNewKey();

		console.log(`Adding ${CounterType[type]} with key = ${newElementKey}`);

		this.setState({
			elements: [
				...this.state.elements,
				{
					type: type,
					key: newElementKey,
					title: `${newElementKey}. ${type === CounterType.Incrementer ? "бројач" : "штоперица"}`
				}
			]
		});
	}

	private removeElement(key: number) {
		console.log("Deleting element with key = " + key);

		this.setState({
			elements: this.state.elements.filter(value => {
				return value.key !== key;
			})
		});
	}

	private removeAllElements() {
		console.log("Deleting all elements");

		this.setState({
			elements: []
		});
	}

	public render() {
		return (
			<Fragment>
				<Header count={this.state.elements.length}
				        addIncrementer={() => this.addCounter(CounterType.Incrementer)}
				        addStopwatch={() => this.addCounter(CounterType.Stopwatch)}
				        removeAllElements={this.removeAllElements}/>

				<section className="d-inline-block mx-md-auto">
					{this.state.elements.map(element => {
						switch (element.type) {
							case CounterType.Incrementer:
								return (
									<Incrementer key={element.key}
									             removeAction={() => this.removeElement(element.key)}>
										{element.title}
									</Incrementer>
								);
							case CounterType.Stopwatch:
								return (
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
				</section>
			</Fragment>
		);
	}
}