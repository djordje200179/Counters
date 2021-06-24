import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/element.css'

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.changeTitleToInput = this.changeTitleToInput.bind(this);
		this.checkChangingToText = this.checkChangingToText.bind(this);
	}

	changeTitleToInput() {
		this.setState({
			editingTitle: true
		});
	}

	checkChangingToText(event) {
		if (event.keyCode === 13)
			this.setState({
				title: event.target.value,
				editingTitle: false
			});
	}

	getTitleField() {
		let titleText = <Button onClick={this.changeTitleToInput} className="title">{this.state.title}</Button>,
			titleEdit = <input type="text" maxLength="12" className="form-control default titleEdit"
			                   onKeyUp={this.checkChangingToText} onBlur={this.checkChangingToText} defaultValue={this.state.title}/>;

		return this.state.editingTitle ? titleEdit : titleText;
	}
}

Counter.propTypes = {
	removeAction: PropTypes.func,
	title: PropTypes.string
};
