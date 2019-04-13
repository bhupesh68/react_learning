import React from 'react';
import {Field, reduxForm} from 'redux-form';

//import Button from 'react-bootstrap/lib/Button';
import {Form, FormControl, FormGroup, ControlLabel, Col, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';

class StreamForm extends React.Component {

  renderError({error, touched}) {
    if(touched && error){
      return (
          <div classname="ui error message">
            <div className="header">{error}</div>
          </div>
      )}
  }
  //renderInput(formProps){ destructure as below:
  renderInput = ({ input, label, meta }) => {
    //to have a semantic UI class "field error"
    const className=`field ${meta.touched && meta.error ? 'error':''}`
    return (
            <div className={className}>
              <label>{label}</label>
              <input {...input} autoComplete="off" />
              {this.renderError(meta)}
            </div>
        );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
              <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label = "Enter Title"/>
                <Field name="description" component={this.renderInput} label = "Enter Description"/>
                <button className="ui button primary">Submit</button>
              </form>
          );
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

export default reduxForm(
              {form:'streamForm',
               validate       //validate:validate
             })(StreamForm);
