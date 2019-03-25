import React from 'react';
import PostsList from './postsList';
import UserHeader from './userHeader';

class App extends React.Component {
  render(){
    return (<div className="container">In the BLOGApp
              <div className="Jumbotron">
                <UserHeader />
                <PostsList />
              </div>
            </div>
          )
  };
}

export default App;
