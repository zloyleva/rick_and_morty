import React from 'react';
import {Header} from '../Header';
import {DashBoard} from '../DashBoard';
import {Paginator} from "../Pagination";

export class PageBuilder extends React.Component{
  constructor(props){
    super(props);

    this.state = {
			personages: [],
			pagesInfo: {},
      page: 3,
      limit: 20
    };
  }

  componentDidMount() {
		this.fetchData();
	}

	fetchData(){
    fetch("https://rickandmortyapi.com/api/character/?page=" + this.state.page)
      .then((response) => response.json())
      .then((response) => {
        if('results' in response){
					this.setState({
						personages: response.results,
            pagesInfo: response.info,
					});
        }
      });
  }

  render = () => {
    const {personages,pagesInfo,page} = this.state;
    return (
      <div>
				<Header />
        <DashBoard personages={personages} />
        <Paginator pagesInfo={pagesInfo} page={page}/>
      </div>
    );
  }
}
