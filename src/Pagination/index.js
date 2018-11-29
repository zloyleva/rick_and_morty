import React from 'react';
import './style.css';

import {PaginationItem} from '../PaginationItem';
import PropTypes from "prop-types";

export class Paginator extends React.Component{

	static propTypes = {
		pagesInfo: PropTypes.object,
		page: PropTypes.number.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			pagesInfo: {},
			page:1
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState((state, props) => {
			return {...{}, ...{pagesInfo: props.pagesInfo, page: props.page}};
		});
	}

	switchPageHandler = (pageLink) => {
		this.props.switchPage(pageLink);
	};

	render = () => {
		const {next, prev} = this.state.pagesInfo;

		return (
			<div className="container-fluid bg-dark">
				<div className="container">
					<div className="row">
						<nav className="mx-1 mt-4">
							<ul className="pagination">
								<PaginationItem switchPage={this.switchPageHandler} title={"Previous"} pageUrl={prev}/>
								<PaginationItem switchPage={this.switchPageHandler} title={this.state.page} pageUrl={null} pageUrl={null} active={true}/>
								<PaginationItem switchPage={this.switchPageHandler} title={"Next"} pageUrl={next}/>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
