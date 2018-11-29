import React from 'react';
import {Header} from '../Header';
import {DashBoard} from '../DashBoard';
import {Paginator} from "../Pagination";
import {PreLoader} from "../PreLoader";
import './style.css';

export class PageBuilder extends React.Component{
	constructor(props){
    super(props);

    this.state = {
			personages: [],
			pagesInfo: {},
      page: 1,
			showPreLoader: true
    };
  }

  componentDidMount() {
		this.setState({
			showPreLoader: true
		});
		this.fetchData();
	}

	fetchData(page=null){
		console.log("fetchData...");

		const currentPage = page?page:this.state.page

    fetch("https://rickandmortyapi.com/api/character/?page=" + currentPage)
      .then((response) => response.json())
      .then((response) => {
        if('results' in response){
					console.log("results in response...");
					this.setState({
						personages: response.results,
						pagesInfo: response.info,
						showPreLoader: false
					});
        }
      //  Todo error response
      });
  }

	switchPageHandler = (pageLink) => {

		const regex = /page=[\d]+/;
		let result = pageLink.match(regex);
    if(result){
			result = result[0].split("=");
			this.setState({ page: Number(result[1]) });

			this.fetchData(result[1]);
    }

	};

  render = () => {
    const {personages,pagesInfo,page,showPreLoader} = this.state;
    return (
      <div className="Main__Page h-100">
				{(showPreLoader)?<PreLoader/>:""}
				<Header />
        <DashBoard personages={personages} />
        <Paginator pagesInfo={pagesInfo} page={page} switchPage={this.switchPageHandler}/>
      </div>
    );
  }
}
