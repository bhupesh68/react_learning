import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

//import JSONPlaceholder from './apis';

class PostsList extends React.Component {
  componentDidMount (){
    this.props.fetchPosts();
  }
  //1. return async 2.response = await get.axios(/posts)
  renderList(){
    return (
      this.props.posts.map(post =>
        <div><h2>{post.title}</h2><p>{post.body}</p></div>
      )
    )
  };
  render(){
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>
  };
}

const mapStateToProps = state => {
  return {posts:state.posts};  //state.posts because conbineReducer has posts as key
}
export default connect(mapStateToProps, ({fetchPosts}))(PostsList);
