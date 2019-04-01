import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {

  //renderInput(formProps){ destructure as below:
  renderInput({ input, label  }) {
    return (
            <div className="field">
              <label>{label}</label>
              <input {...input} />
            </div>
        );
  }

  onSubmit(formValues){
    //event.preventDefault();
  }

  render() {
    return <div>
            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name="title" component={this.renderInput} label="Enter Title" />
              <Field name="description" component={this.renderInput} label="Enter Description" />
              <button className="primary">Submit</button>
            </form>
          </div>
  }
}

const validate = formValues =>{
  const errors = {};
  if(!formValues.title){
    errors.title='You must enter title';
  }
  if(!formValues.description){
    errors.description='You must enter a description';
  }
}

export default reduxForm({form:'StreamCreate'})(StreamCreate);
