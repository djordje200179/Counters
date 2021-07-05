import { Component, KeyboardEvent, FocusEvent } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/counter.css";

export interface CounterProps {
	removeAction: () => void
}

export interface CounterState {
	title: string,
	editingTitle: boolean
}

export default abstract class Counter<P extends CounterProps, S extends CounterState> extends Component<P, S> {
	private changeTitleToInput() {
		this.setState({
			editingTitle: true
		});
	}

	private checkChangingToText(event: KeyboardEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) {
		if ((event instanceof KeyboardEvent && event.code === "Enter") || event instanceof FocusEvent)
			this.setState({
				title: event.currentTarget.value,
				editingTitle: false
			});
	}

	protected getTitleField() {
		let titleText = <Button onClick={this.changeTitleToInput} className="title">{this.state.title}</Button>,
		    titleEdit = <input type="text"
		                       maxLength={12}
		                       className="form-control default titleEdit"
		                       onKeyUp={this.checkChangingToText}
		                       onBlur={this.checkChangingToText}
		                       defaultValue={this.state.title}/>;

		return this.state.editingTitle ? titleEdit : titleText;
	}
}