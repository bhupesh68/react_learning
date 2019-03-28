import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './userHeader';

//import JSONPlaceholder from './apis';

class PostsList extends React.Component {
  componentDidMount (){
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }
  //1. return async 2.response = await get.axios(/posts)
  renderList(){
    return (
      this.props.posts.map(post =>
        <div><h2>{post.title}</h2><p>{post.body}</p>
        <UserHeader userID={post.id} />
        </div>
      )
    )
  };
  render(){
    return <div>{this.renderList()}</div>
  };
}
const mapStateToProps = state => {
  return {posts:state.posts};  //state.posts because conbineReducer has posts as key
}
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostsList);
