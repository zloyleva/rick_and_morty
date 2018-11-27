import React from 'react';
import {Cards} from "../Cards";

export class DashBoard extends React.Component{

	render = () => {
		return (
			<div className="container-fluid bg-dark">
				<div className="container">
					<div className="row justify-content-between">
						<Cards personages={this.props.personages}/>
					</div>
				</div>
			</div>
		);
	}

}