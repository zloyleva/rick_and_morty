import React from 'react';
import {CardItem} from "../CardItem";
import PropTypes from "prop-types";
import {EmptyData} from "../EmptyData";

export class Cards extends React.Component{

	static propTypes = {
		personages: PropTypes.array.isRequired
	};

	constructor(props){
		super(props);
		this.state = {
			personages: []
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");
		this.setState((state, props) => {
			return {...{}, ...{personages: props.personages}};
		});
	}

	getHtml =() => {
		const {personages} = this.state;
		return (personages.length === 0)?<EmptyData />:personages.map((el,index)=><CardItem data={el} key={index}/>);
	};

	render = () => {
		//todo add preLoader
		return this.getHtml();
	}

}