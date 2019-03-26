import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userID);
  }

  render(){
    const user = this.props.users.find(user => user.id === this.props.userID);

    if(!user){
      return null;
    }

    return <div className="header">{user.name}</div>
    //return <div>{this.props.users.map(user => user.name)}</div>
  }

}

const mapStateToProps = state => {
  return {users:state.users}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);
