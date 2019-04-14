import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyDrlhIANSw09owhM8L4xAeqR6Ret2yIbWc'

const App = () => {
  return <div>
            <SearchBar />
        </div>;
}//above a new instance of search bar is created interm calliing constructor fnctio

ReactDOM.render(
        <App />, document.querySelector('#root')
      );
