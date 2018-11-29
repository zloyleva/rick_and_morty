import React from 'react';
import './style.css';

export class EmptyData extends React.Component{
	render = () => {
		return (
			<h2 className="white-text my-5">Waiting for a data...</h2>
		);
	}
}