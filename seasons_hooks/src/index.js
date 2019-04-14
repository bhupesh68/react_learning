import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './seasondisplay';
import Spinner from './spinner';
import useLocation from './useLocation';

const App = () => {

  const {lat, errorMessage} = useLocation();

  let content;
    if(lat) {
      content = <SeasonDisplay lat={lat} />;
    } else if (errorMessage) {
      content = <div>Error: {errorMessage}</div>
    } else {
      content = <Spinner message="Waiting for location permission" />
    }
    
  return <div className="border red">{content}</div>
}
ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
