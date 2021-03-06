import React from 'react';
import Thunk from 'redux-thunk';
import {connect} from 'react-redux';

import {fetchStream} from '../../actions';

class StreamShow extends React.Component {
  componentDidMount (){
    this.props.fetchStream(this.props.match.params.id)
  }

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>;
    }
    const {title, description} = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {}
// }
// export default connect(mapStateToProps, {fetchStream})(StreamShow);
const mapStateToProps = (state, ownProps) => {
  return {stream:state.streams[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchStream})(StreamShow);
