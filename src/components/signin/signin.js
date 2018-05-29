import React, { Component } from 'react';
import FormField from '../widgets/FormFields/formFields';
import styles from './signin.css';

class SignIn extends Component {

  state = {
    registerError: '',
    loading: false,
    formData:{
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage:''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage:''
      }
    }
  }


  updateForm = (element) => {}

  render() {
    return (
      <div className={styles.logContainer}>
        <form>
          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={(element)=>this.updateForm(element)}
         />
        </form>
      </div>
    )
  }
}
export default SignIn
