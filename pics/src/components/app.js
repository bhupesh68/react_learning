import React from 'react';
import SearchBar from './searchBar';
import unsplash from '../api/unsplash';
import ImageList from './imageList';

class App extends React.Component {
  state = {images: []};
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
        params : {query:term},
    })

    this.setState({images:response.data.results})
      //promise .then(response => {console.log(response.data.results)})
  };

  render (){
      return (
        <div>
          <SearchBar
          onSSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
          <div>
            <ImageList
              images={this.state.images}
            />
          </div>
        </div>
      )
  };
}
export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
