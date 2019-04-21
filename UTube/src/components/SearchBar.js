import React from 'react';
//import YTSearch from 'youtube-api-search';
//import { API_KEY } from '../../actions/types';

class SearchBar extends React.Component {

  state={term:'', videos:[]};

  onFormSubmit(event){
    event.preventDefault();
    this.props.onSearchChange(this.state.term)
    //this.props.onSSubmit(this.state.term); //difference bw function vs class props
  }
  // renderVideos(){
  //   if(!this.state.videos){
  //     return <div>Loading...</div>;
  //   }
  //   // const {title, description} = this.state.videos;
  //   // return (
  //   //   <div>
  //   //     <h1>{title}</h1>
  //   //     <h2>{description}</h2>
  //   //   </div>
  //   // )
  //   //onChange={e => this.setState({term:e.target.value})}
  // }
  render() {
    return (
      <div>
          <form onSubmit={e => this.onFormSubmit(e)} className="formGroup">
            <label>Search Videos</label>
            <input
              type="text" className="formControl"
              id="SearchInput"
              value={this.state.term}
              onChange={e => this.setState({term:e.target.value})}
              >
            </input>
          </form>
      </div>
    );
  }
}
//value = state is controlled input
export default SearchBar;
