import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasondisplay';
import Spinner from './spinner';

class App extends React.Component {
  state = {lat:null};
  // constructor(props){
  //     super(props);
  //     this.state = {lat:null, errorMessage:''};
  // }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      err => this.setState({errorMessage:err.message})
    );
  }

  renderContent() {

    if(this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <SeasonDisplay error = {this.state.errorMessage} />
    }
      return <div><Spinner message="Waiting for location permission" /></div>;
  }

  render() {
      return (
        <div className="border red">
          {this.renderContent()}
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
