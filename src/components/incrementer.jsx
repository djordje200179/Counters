import Counter from './counter'
import PropTypes from 'prop-types';
import {Button, Badge} from "reactstrap";

export default class Incrementer extends Counter {
	constructor(props) {
		super(props);

		this.state = {
			count: this.props.start,
			title: this.props.children,
			editingTitle: false
		};

		this.doIncrement = this.doIncrement.bind(this);
		this.doDecrement = this.doDecrement.bind(this);
	}

	getCount() {
		return this.state.count === 0 ? 'Нула' : this.state.count;
	}

	doIncrement() {
		this.setState({
			count: this.state.count + 1
		});
	}

	doDecrement() {
		this.setState({
			count: this.state.count - 1
		});
	}

	canDecrement() {
		return this.state.count === 0;
	}

	render() {
		return (
			<Badge color="warning" className="m-1 counter bg-warning">
				{this.getTitleField()}

				<p className="display-4">{this.getCount()}</p>

				<Button color="secondary" size="sm" onClick={this.doIncrement} className="m-2">Повећај</Button>
				<Button color="secondary" size="sm" onClick={this.doDecrement} className="m-2" disabled={this.canDecrement()}>Смањи</Button>
				<Button color="danger" size="sm" onClick={this.props.removeAction} className="m-2">Избриши</Button>
			</Badge>
		);
	}
}

Incrementer.propTypes = {
	start: PropTypes.number
};
