import React from 'react';
import {connect} from 'react-redux';
//import {fetchUser} from '../actions';

class UserHeader extends React.Component {
  // componentDidMount(){
  //   this.props.fetchUser(this.props.userID);
  // }

  render(){

    const { user } = this.props; //destructure user from
    //users object that has fetchUser,user and userID etc.
    if(!user){
      return null;
    }
    return <div className="header"><h4>{user.name}</h4></div>
    //return <div>{this.props.users.map(user => user.name)}</div>
  }
}
const mapStateToProps = (state, ownProps) => {
  return {user:state.users.find(user => user.id === ownProps.userID)} //1. created a propert namely - 'users'
  //2. state.users coming from combineReducers
}

//export default connect(mapStateToProps, {fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);
