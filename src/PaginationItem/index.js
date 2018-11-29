import React from 'react';

export class PaginationItem extends React.Component{

	isNeedMoveToPage = () => {
		return (this.props.pageUrl)?this.props.switchPage(this.props.pageUrl):null;
	};

	returnHtml = () => {
		if(this.props.pageUrl || this.props.active){
			return (
				<li className="page-item">
					<div className="page-link" data-url={this.props.pageUrl} onClick={() => this.isNeedMoveToPage()}>{this.props.title}</div>
				</li>
			);
		}
		return null;
	};

	render = () => {
		return this.returnHtml();
	}
}