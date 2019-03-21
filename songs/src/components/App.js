import React, { Component } from 'react';
import SongsList from './songsList';

class App extends Component {
  render (){
    return (
      <div className="container">
        <div className="jumbotron">
          <SongsList />
        </div>
      </div>
    )
  };
}
export default App;
