import React, { Component } from 'react';
import SongsList from './songsList';
import SongDetail from './songDetail';

class App extends Component {
  render (){
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-sm">
              <SongsList />
            </div>
            <div className="col-sm">
              <div><strong>Song Detail</strong>
                <SongDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
export default App;
