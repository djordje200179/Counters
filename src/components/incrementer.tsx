import Counter, { CounterProps, CounterState } from "./counter";
import { Button, Badge } from "reactstrap";
import autobind from "auto-bind";

interface IncrementerState extends CounterState {
	count: number
}

export default class Incrementer extends Counter<CounterProps, IncrementerState> {
	public constructor(props: CounterProps) {
		super(props);
		autobind(this);

		this.state = {
			title: this.props.children as string,
			editingTitle: false,
			count: 0
		};
	}

	private getCount() {
		return this.state.count === 0 ? "Нула" : this.state.count;
	}

	private doIncrement() {
		this.setState({
			count: this.state.count + 1
		});
	}

	private doDecrement() {
		this.setState({
			count: this.state.count - 1
		});
	}

	private canDecrement() {
		return this.state.count === 0;
	}

	public render() {
		return (
			<Badge color="warning" className="m-1 counter bg-warning">
				{this.getTitleField()}

				<h4 className="display-4">{this.getCount()}</h4>

				<Button color="secondary" size="sm" onClick={this.doIncrement} className="m-2">Повећај</Button>
				<Button color="secondary"
				        size="sm"
				        onClick={this.doDecrement}
				        className="m-2"
				        disabled={this.canDecrement()}>Смањи</Button>
				<Button color="danger" size="sm" onClick={this.props.removeAction} className="m-2">Избриши</Button>
			</Badge>
		);
	}
}