import React from 'react';

import { API_KEY } from '../actions/types';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideosList from './VideosList';
//import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter ignores the history prop. SO use ROUTER
//BrowserRouter creates is own history prop - so doesnt allow create ur own
class App extends React.Component {
  constructor(props) {
    super(props);

        this.state = {videos: []};

      YTSearch({key: API_KEY, term: 'surfboards'}, //to esnure home page
      // has some vidoes by default
                (videos) => this.setState({videos}));
    }
  videoSearch (term){
    YTSearch({key: API_KEY, term: term},
              (videos) => this.setState({videos}));
  }
  render(){
    return (
      <div>In App
        <SearchBar onSearchChange={term => this.videoSearch(term)} />
        <VideosList videos={this.state.videos}/>
      </div>
    );
  }
}
export default App;
