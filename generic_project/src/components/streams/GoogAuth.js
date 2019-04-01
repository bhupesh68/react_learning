import React from 'react';
import {connect} from 'react-redux';
import {onSignIn, onSignOut} from '../../actions';

class GoogAuth extends React.Component {

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init(
          { clientId:
            '173931796722-vginviktanv51o2srr9k85f3i3r7aptp.apps.googleusercontent.com',
            scope:'email'}
        ).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
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

  renderGAuthButton(){
    if (this.props.isSignedIn) {
      return (<div>
              <a id="google-button-O" className="btn btn-sm btn-google" onClick={this.onClickSignOut}>
              <i className="fa fa-google"></i>
                Sign-Out
              </a></div>);
    }
    else {
      return (<div>
              <a id="google-button-I" className="btn btn-sm btn-social btn-google" onClick={this.onClickSignIn}>
              <i className="fa fa-google"></i>
               Sign-in with G
              </a></div>);
    }
  }

  render()
  {
    return <div>{this.renderGAuthButton()}</div>
  }
}

const mapStateToProps = state => {
  return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{onSignIn,onSignOut})(GoogAuth);
