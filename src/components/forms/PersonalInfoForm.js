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
    const { 
      firstName, 
      lastName, 
      email, 
      phoneNumber,
      urlAvatar,
      urlLinkedIn,
      urlPortfolio,
      jobTitle,
      introduction
    } = this.props.info;

    return (
      <section className='section-input-personal'>
        <h2>Personal Information</h2>
        <div className='input-container'>
          <Input 
            type='text' 
            placeholder='First Name'
            defaultValue={firstName} 
            onChange={(e) => this.handleOnChange('firstName', e)} />
          <Input 
            type='text' 
            placeholder='Last Name' 
            defaultValue={lastName} 
            onChange={(e) => this.handleOnChange('lastName', e)} />
          <Input 
            type='email' 
            placeholder='Email' 
            defaultValue={email} 
            onChange={(e) => this.handleOnChange('email', e)} />
          <Input 
            type='tel' 
            placeholder='Phone Number' 
            defaultValue={phoneNumber} 
            onChange={(e) => this.handleOnChange('phoneNumber', e)} />
          <Input 
            type='text' 
            placeholder='Job Title'
            defaultValue={jobTitle} 
            onChange={(e) => this.handleOnChange('jobTitle', e)} />
          <Input 
            type='text' 
            placeholder='Profile Image URL'
            defaultValue={urlAvatar} 
            onChange={(e) => this.handleOnChange('urlAvatar', e)} />
          <Input 
            type='text' 
            placeholder='LinkedIn URL (optional)'
            defaultValue={urlLinkedIn} 
            onChange={(e) => this.handleOnChange('urlLinkedIn', e)}  />
          <Input 
            type='text' 
            placeholder='Portfolio URL (optional)'
            defaultValue={urlPortfolio} 
            onChange={(e) => this.handleOnChange('urlPortfolio', e)} />
          <TextArea 
            rows='5' 
            placeholder='Describe yourself...'
            defaultValue={introduction} 
            onChange={(e) => this.handleOnChange('introduction', e)} /> 
        </div>
      </section>
    );
  }
}

export default PersonalInfoForm;