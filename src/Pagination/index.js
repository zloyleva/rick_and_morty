import React from 'react';
import './style.css';

export class Paginator extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			pagesInfo: this.props
		};
	}
	render = () => {
		const {pagesInfo} = this.props;
		console.log(this.state.pagesInfo);
		return (
			<div className="container-fluid bg-dark">
				<div className="container">
					<div className="row">
						<nav className="mx-1 mt-4">
							<ul className="pagination">
								<PaginationItem title={"Previous"} pageUrl={"prev"}/>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<PaginationItem title={"Next"} pageUrl={"next"}/>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

class PaginationItem extends React.Component{
	render = () => {
		return (
			<li className="page-item">
				<a className="page-link" data-url={this.props.pageUrl} >{this.props.title}</a>
			</li>
		);
	}
}