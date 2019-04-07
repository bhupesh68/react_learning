import React from 'react';
import {Field, reduxForm} from 'redux-form';
import reduxThunk from 'redux-thunk';
import {connect} from 'react-redux';

import StreamForm from './StreamForm';
import {createStream} from '../../actions';

//import Button from 'react-bootstrap/lib/Button';
//import {Form, FormControl, FormGroup, ControlLabel, Col, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';


class StreamCreate extends React.Component {

  onSubmit = formValues => {
    this.props.createStream(formValues); //this is callback fucntion when user submits the form
  }
  render() {
    return <div>
              <h3>CREATE STREAM</h3>
              <StreamForm onSumbit={this.onSubmit} />
          </div>
  }
}
export default connect(null, {createStream})(StreamCreate);
