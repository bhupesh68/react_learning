import _ from 'lodash'
import React from 'react';
import {connect}from 'react-redux';

import {editStream, fetchStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    return this.props.editStream(this.props.match.params.id, formValues);
  }
  renderList(){
    if(!this.props.stream){
      return <div>Loading...</div>;
    }

    return (
        <div className="item" key={this.props.stream.id}>
          <h2>Edit Stream</h2>
          <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
        </div>
    );
  }
  render(){
        return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream:state.streams[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
