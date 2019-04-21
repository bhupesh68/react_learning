import React from 'react';
import {connect} from 'react-redux';
import {onSignIn, onSignOut} from '../../actions';

class GoogAuth extends React.Component {

  componentDidMount(){ //so that load and initialise happends just once when the component is rendered on the screen first time
    //scripts in head of HTML file loaded before this components (index.html having google script).
    // Hence use window to avoid gapi not defined
    window.gapi.load('client:auth2',()=>{ //1. loads AUTH2 part (gapi.client library) of JS code for different google APIs
      //2. callback function used as second argument to ensure that this code waits for the first arg to finish loading JS code
      //from google server
      window.gapi.client.init( //initialises (asynchronousely & thats why can use promise instead of callback)
      //above 'AUTH2' JS code loaded as above with our credentials
          { clientId:
            '173931796722-cspnsabovs717e6dh7tp4o1d19rv64ng.apps.googleusercontent.com',
            scope:'email'}
        ).then(() => { //this callback executes after gapi.client lib successfully initialised
          this.auth = window.gapi.auth2.getAuthInstance(); //1. auth he is here is the object instancce
          //2. getAuthInstance - one of the methods provided by gapi.auth2 library giveshelps get reference to Auth object
          // that can help user signin/out or check status
          //Now we need to print the status of whether use signed in/out but componenthas already rendered!!
          //use component level state via setState!!
          this.OnAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.OnAuthChange);
        });
    });
  }

  OnAuthChange = isSignedIn => {
    if (isSignedIn){
      this.props.onSignIn(this.auth.currentUser.get().getId());
    }
    else
      this.props.onSignOut();
  }

  onClickSignIn = () => {
    this.auth.signIn();
  }
  onClickSignOut = () => {
    this.auth.signOut();
  }

  render()
  {
    return <div>{this.renderGAuthButton()}</div>
  }
  renderGAuthButton(){
    if (this.props.isSignedIn) {
      return (<button className="ui red google button" onClick={this.onClickSignOut}>
                  <i className="google icon" />
                    Sign Out
                </button>
      );
    }
    else {
      return (<button className="ui red google button" onClick={this.onClickSignIn}>
                  <i className="google icon" />
                    Sign in with Google
                </button>
      );}}}
const mapStateToProps = state => {
  return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{onSignIn,onSignOut})(GoogAuth);
