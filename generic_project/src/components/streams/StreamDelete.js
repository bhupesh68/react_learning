import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchStream, deleteStream} from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  //const actions = ( //react.fragment avoid extra div which helps render properly
    //in class, you can't have a variable?
  renderActions(){
    //const id = this.props.match.params.id;
    const { id } = this.props.match.params;
    return (                //arrow function and not simple call to deletestream actioncreator
    <React.Fragment>
      <button onClick = {()=>this.props.deleteStream(id)}
              className="ui button negative">Delete</button>
            <Link to = "/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
  }
  renderContent(){
    if(!this.props.stream){
      return 'Are you sure wanna delete?'
    }

    return `Delete the title : ${this.props.stream.title} `

  }
  render(){
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={()=>history.push('/')}
        />);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream:state.streams[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
