import Input from './form-inputs/Input';
import TextArea from './form-inputs/TextArea';

const PersonalInfoForm = (props) => {
  const handleOnChange = (propName, e) => {
    props.setInfo(propName, e.target.value);
  }
  
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
  } = props.info;

  return (
    <section className='section-input-personal'>
      <h2>Personal Information</h2>
      <div className='input-container'>
        <Input 
          type='text' 
          placeholder='First Name'
          defaultValue={firstName} 
          onChange={(e) => handleOnChange('firstName', e)} />
        <Input 
          type='text' 
          placeholder='Last Name' 
          defaultValue={lastName} 
          onChange={(e) => handleOnChange('lastName', e)} />
        <Input 
          type='email' 
          placeholder='Email' 
          defaultValue={email} 
          onChange={(e) => handleOnChange('email', e)} />
        <Input 
          type='tel' 
          placeholder='Phone Number' 
          defaultValue={phoneNumber} 
          onChange={(e) => handleOnChange('phoneNumber', e)} />
        <Input 
          type='text' 
          placeholder='Job Title'
          defaultValue={jobTitle} 
          onChange={(e) => handleOnChange('jobTitle', e)} />
        <Input 
          type='text' 
          placeholder='Profile Image URL'
          defaultValue={urlAvatar} 
          onChange={(e) => handleOnChange('urlAvatar', e)} />
        <Input 
          type='text' 
          placeholder='LinkedIn URL (optional)'
          defaultValue={urlLinkedIn} 
          onChange={(e) => handleOnChange('urlLinkedIn', e)}  />
        <Input 
          type='text' 
          placeholder='Portfolio URL (optional)'
          defaultValue={urlPortfolio} 
          onChange={(e) => handleOnChange('urlPortfolio', e)} />
        <TextArea 
          rows='5' 
          placeholder='Describe yourself...'
          defaultValue={introduction} 
          onChange={(e) => handleOnChange('introduction', e)} /> 
      </div>
    </section>
  );
}

export default PersonalInfoForm;