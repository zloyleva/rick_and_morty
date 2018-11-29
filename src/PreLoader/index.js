import React from 'react';
import './style.css';

export class PreLoader extends React.Component{
	render = () => {
		return (
			<div className="PreLoader justify-content-center align-items-center d-flex">
				<img src="../images/loading.svg" alt=""/>
			</div>
		);
	}
}