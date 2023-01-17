import { Component } from 'react';
import Input from './form-inputs/Input';
import TextArea from './form-inputs/TextArea';

class PersonalInfoForm extends Component {
  
  constructor(props) {
    super(props);
  }

  handleOnChange = (propName, e) => {
    this.props.setInfo(propName, e.target.value);
  }
  
  render() {
    return (
      <section className='section-input-personal'>
        <h2>Personal Information</h2>
        <div className='input-container'>
          <Input 
            type='text' 
            placeholder='First Name' 
            onChange={(e) => this.handleOnChange('firstName', e)} />
          <Input 
            type='text' 
            placeholder='Last Name' 
            onChange={(e) => this.handleOnChange('lastName', e)} />
          <Input 
            type='email' 
            placeholder='Email' 
            onChange={(e) => this.handleOnChange('email', e)} />
          <Input 
            type='tel' 
            placeholder='Phone Number' 
            onChange={(e) => this.handleOnChange('phoneNumber', e)} />
          <Input 
            type='text' 
            placeholder='LinkedIn URL (optional)'
            onChange={(e) => this.handleOnChange('urlLinkedIn', e)}  />
          <Input 
            type='text' 
            placeholder='Portfolio URL (optional)'
            onChange={(e) => this.handleOnChange('urlPortfolio', e)} />
          <Input 
            type='text' 
            placeholder='Job Title'
            onChange={(e) => this.handleOnChange('jobTitle', e)} />
          <TextArea 
            rows='5' 
            placeholder='Describe yourself...'
            onChange={(e) => this.handleOnChange('workProfile', e)} /> 
        </div>
      </section>
    );
  }
}

export default PersonalInfoForm;