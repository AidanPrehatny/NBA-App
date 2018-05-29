import React, { Component } from 'react';
import FormField from '../widgets/FormFields/formFields';
import styles from './dashboard.css';

class Dashboard extends Component {

  state ={
    postError: '',
    loading: false,
    formData: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage:''
      },
      title: {
        element: 'input',
        value: '',
        config: {
          name: 'title_input',
          type: 'text',
          placeholder: 'Enter your title'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage:''
      },
    }
  }

  updateForm = (element) => {
    const newFormData = {
      ...this.state.formData
    }
    const newElement = {
      ...newFormData[element.id]
    }
    newElement.value = element.event.target.value;
    if(element.blur){
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormData[element.id] = newElement;

    this.setState({
      formData: newFormData
    })
  }

  validate = (element) => {
    let error = [true, ''];

    if(element.validation.required){
      const valid = element.value.length >= 5;
      const message = `${!valid ? 'Must be greater than 5':''}`;
      error = !valid ? [valid, message] : error
    }
    return error;
  }

  submitForm = (e) => {
    e.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value;
    }
    for(let key in this.state.formData){
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    console.log(dataToSubmit)

    if(formIsValid){
      console.log('Submit Post')
    }else{
       this.setState({
         postError: 'Something Went Wrong'
       })
    }
  }

  submitButton = () => (
    this.state.loading ?
     'Loading...'
     :
     <div>
       <button stype="submit" >Add Post</button>
     </div>
  )

  showError = () => (
    this.state.registerError !== '' ?
    <div className={styles.error}>{this.state.postError}</div>
    :
    ''
  )

  render() {
    return(
      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>
          <FormField
            id={'author'}
            formData={this.state.formData.author}
            change={(element)=>this.updateForm(element)}
         />
          <FormField
            id={'title'}
            formData={this.state.formData.title}
            change={(element)=>this.updateForm(element)}
         />

         {this.submitButton()}
         {this.showError()}
        </form>
      </div>
    )

  }

}
export default Dashboard;
