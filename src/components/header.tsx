import { Component } from "react";
import {
	Button, Navbar, NavbarBrand, Nav, NavItem,
	ButtonDropdown, DropdownMenu, DropdownToggle,
	DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import autobind from "auto-bind";

interface HeaderProps {
	count: number,
	addIncrementer: () => void,
	addStopwatch: () => void,
	removeAllElements: () => void
}

interface HeaderState {
	dropdownOpen: boolean
}

export default class Header extends Component<HeaderProps, HeaderState> {
	public constructor(props: HeaderProps) {
		super(props);
		autobind(this);

		this.state = {
			dropdownOpen: false
		};
	}

	private toggleDropdown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	private getCorrectText() {
		if (this.props.count === 0)
			return "Нема бројача";

		return "Укупно" +
			(this.props.count % 10 < 2 || (this.props.count <= 20 && this.props.count > 4) ? " има " : " имају ") +
			String(this.props.count) +
			(this.props.count % 10 === 1 && this.props.count !== 11 ? " бројач" : " бројача");
	}

	private canDeleteElements() {
		return this.props.count === 0;
	}

	public render() {
		return (
			<Navbar color="dark" dark>
				<NavbarBrand className="display-4 mb-0 ms-2 text-white">{this.getCorrectText()}</NavbarBrand>

				<Nav>
					<NavItem>
						<ButtonDropdown className="m-1" isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
							<DropdownToggle color="success" caret>
								Додај
							</DropdownToggle>

							<DropdownMenu right>
								<DropdownItem onClick={this.props.addIncrementer}>
									Бројач
								</DropdownItem>

								<DropdownItem onClick={this.props.addStopwatch}>
									Штоперица
								</DropdownItem>
							</DropdownMenu>
						</ButtonDropdown>
					</NavItem>

					<NavItem>
						<Button color="danger"
						        className="m-1"
						        disabled={this.canDeleteElements()}
						        onClick={this.props.removeAllElements}>
							Избриши све бројаче
						</Button>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}