import React from 'react';
import {Field, reduxForm} from 'redux-form';
import reduxThunk from 'redux-thunk';
import {connect} from 'react-redux';

import {createStream} from '../../actions';

//import Button from 'react-bootstrap/lib/Button';
import {Form, FormControl, FormGroup, ControlLabel, Col, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';


class StreamCreate extends React.Component {

  renderError({error, touched}) {
    if(touched && error){
      return <div className="Header">{error}</div>;
    }

  }
  //renderInput(formProps){ destructure as below:
  renderInput = ({ input, label, meta }) => {
    //to have a semantic UI class "field error"
    const className=`field ${meta.touched && meta.error ? 'error':''}`
    return (
            <div className={className}>
              <label>{label}</label>
              <input {...input} autoComplete="Off" />
              {this.renderError(meta)}
            </div>
        );
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    return <div>
              <form className="FormGroup error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label = "Enter Title"/>
                <Field name="description" component={this.renderInput} label = "Description"/>
                <button className="button primary">Submit</button>
              </form>
          </div>
  }
}

const validate = formValues =>{
  const errors = {};
  if(!formValues.title){
    errors.title='You must enter title';
  } //name property of the field is used
  if(!formValues.description){
    errors.description='You must enter a description';
  }
  return errors;
}

const formWrapped = reduxForm(
              {form:'StreamCreate',
               validate       //validate:validate
              })(StreamCreate);

export default connect(null, {createStream})(formWrapped);
