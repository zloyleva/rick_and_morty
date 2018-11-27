import React from 'react';
import './style.css';

export class Cards extends React.Component{

	createHtml = (data,index) => {
		return (
			<article className="card mx-1 my-2 CharacterCard__Wrapper" key={index}>
				<div className="CharacterCard__ImgWrapper">
					<div className="card-image">
						<img src={data.image} alt={data.name}/>
					</div>
					<div className="CharacterCard__Title"><h2
						className="CharacterCard__Name">{data.name}</h2><p
						className="CharacterCard__Description">id: {data.id} - created a year ago</p></div>
				</div>
				<div className="CharacterCard__InfoWrapper">
					<div className="CharacterCard__TextWrapper">
						<span>STATUS</span>
						<p>{data.status}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>SPECIES</span>
						<p>{data.species}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>GENDER</span>
						<p>{data.gender}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>ORIGIN</span>
						<p>{data.origin.name}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>LAST LOCATION</span>
						<p>{data.location.name}</p>
					</div>
				</div>
			</article>
		);
	};

	render = () => {
		return this.props.personages.map((el,index)=>this.createHtml(el,index));
	}

}