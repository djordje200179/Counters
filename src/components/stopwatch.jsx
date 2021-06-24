import Counter from './counter'
import {Button, Badge} from 'reactstrap';

export default class Stopwatch extends Counter {
	constructor(props) {
		super(props);

		this.state = {
			tenths: 0,
			running: false,
			stopwatch: null,
			title: this.props.children,
			editingTitle: false
		};

		this.onStart = this.onStart.bind(this);
		this.onPause = this.onPause.bind(this);
		this.onStop = this.onStop.bind(this);
		this.updateTime = this.updateTime.bind(this);
	}

	updateTime() {
		this.setState({
			tenths: this.state.tenths + 1,
		});
	}

	onStart() {
		this.setState({
			running: true,
			stopwatch: setInterval(this.updateTime, 100)
		});
	}

	onPause() {
		this.setState({
			running: false
		});

		clearInterval(this.state.stopwatch)
	}

	onStop() {
		this.setState({
			tenths: 0,
			running: false,
			editingTitle: false
		});

		clearInterval(this.state.stopwatch)
	}

	getStartButton() {
		return (
			<Button color={this.state.running ? 'warning' : 'success'} size="sm" className="m-2"
			        onClick={this.state.running ? this.onPause : this.onStart}>
				{this.state.running ? 'Паузирај' : 'Покрени'}
			</Button>
		);
	}

	isResetButtonDisabled() {
		return !this.state.running && this.state.tenths === 0;
	}

	getTimeText() {
		let time = new Date(this.state.tenths * 100);

		return (
			('0' + time.getUTCHours()).slice(-2) + ':' +
			('0' + time.getUTCMinutes()).slice(-2) + ':' +
			('0' + time.getUTCSeconds()).slice(-2) + ':' +
			String(time.getUTCMilliseconds() / 100)
		);
	}

	render() {
		return (
			<Badge color="info" className="counter m-1 bg-info">
				{this.getTitleField()}

				<p className="display-4">{this.getTimeText()}</p>

				{this.getStartButton()}

				<Button color="danger" size="sm" className="m-2" onClick={this.onStop} disabled={this.isResetButtonDisabled()}>
					Ресетуј
				</Button>
				<Button color="danger" size="sm" className="m-2" onClick={this.props.removeAction}>
					Избриши
				</Button>
			</Badge>
		);
	}
}