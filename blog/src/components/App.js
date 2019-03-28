import React from 'react';
import PostsList from './postsList';
class App extends React.Component {
  render(){
    return (<div className="container">In the BLOGApp
              <div className="Jumbotron">
                <PostsList />
              </div>
            </div>
          )
  };
}

export default App;
