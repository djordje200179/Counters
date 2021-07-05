import Counter, { CounterProps, CounterState } from "./counter";
import { Button, Badge } from "reactstrap";
import autobind from "auto-bind";

interface StopwatchState extends CounterState {
	tenths: number
	stopwatch: number
}

export default class Stopwatch extends Counter<CounterProps, StopwatchState> {
	public constructor(props: CounterProps) {
		super(props);
		autobind(this);

		this.state = {
			title: this.props.children as string,
			editingTitle: false,
			tenths: 0,
			stopwatch: -1
		};
	}

	private updateTime() {
		this.setState({
			tenths: this.state.tenths + 1
		});
	}

	private onStart() {
		this.setState({
			stopwatch: window.setInterval(this.updateTime, 100)
		});
	}

	private onPause() {
		clearInterval(this.state.stopwatch);

		this.setState({
			stopwatch: -1
		});
	}

	private onStop() {
		this.setState({
			tenths: 0,
			editingTitle: false,
			stopwatch: -1
		});

		clearInterval(this.state.stopwatch);
	}

	private isRunning() {
		return this.state.stopwatch !== -1;
	}

	private getStartButton() {
		return (
			<Button color={this.isRunning() ? "warning" : "success"} size="sm" className="m-2"
			        onClick={this.isRunning() ? this.onPause : this.onStart}>
				{this.isRunning() ? "Паузирај" : "Покрени"}
			</Button>
		);
	}

	private isResetButtonDisabled() {
		return !this.isRunning() && this.state.tenths === 0;
	}

	private getTimeText() {
		let time = new Date(this.state.tenths * 100);

		return (
			("0" + time.getUTCHours()).slice(-2) + ":" +
			("0" + time.getUTCMinutes()).slice(-2) + ":" +
			("0" + time.getUTCSeconds()).slice(-2) + ":" +
			String(time.getUTCMilliseconds() / 100)
		);
	}

	public render() {
		return (
			<Badge color="info" className="counter m-1 bg-info">
				{this.getTitleField()}

				<h4 className="display-4">{this.getTimeText()}</h4>

				{this.getStartButton()}

				<Button color="danger"
				        size="sm"
				        className="m-2"
				        onClick={this.onStop}
				        disabled={this.isResetButtonDisabled()}>
					Ресетуј
				</Button>
				<Button color="danger" size="sm" className="m-2" onClick={this.props.removeAction}>
					Избриши
				</Button>
			</Badge>
		);
	}
}