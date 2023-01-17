import { Component } from 'react';
import Input from './form-inputs/Input';
import TextArea from './form-inputs/TextArea';

class PersonalInfoForm extends Component {
  
  render() {
    return (
      <section className='section-input-personal'>
        <h2>Personal Information</h2>
        <div className='input-container'>
          <Input type='text' placeholder='First Name' />
          <Input type='text' placeholder='Last Name' />
          <Input type='email' placeholder='Email' />
          <Input type='tel' placeholder='Phone Number' />
          <TextArea rows='5' placeholder='Describe yourself...' /> 
        </div>
      </section>
    );
  }
}

export default PersonalInfoForm;