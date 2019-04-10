import React from 'react';
import Thunk from 'redux-thunk';
import {connect} from 'react-redux';

import {fetchStream} from '../../actions';

class StreamShow extends React.component {
  componentDidMount (){
    this.props.fetchStream(this.props.own)
  }

  render(){


  }
}
// const mapStateToProps = state => {
//   return {}
// }
//
// export default connect(mapStateToProps, {fetchStream})(StreamShow);

const mapStateToProps = (state, ownProps) => {
  return {stream:ownProps.params.match.id}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);
