import { Component } from 'react';
import Input from './Input.js';
import TextArea from './TextArea.js';

class ExperienceFormInput extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.experience;
  }

  handleOnChange = (propName, e) => {
    this.setState({
      ...this.state,
      [propName]: e.target.value
    }, () => this.props.editExperience(this.state));
  }

  render() {
    const { 
      jobTitle, 
      companyName, 
      startYear, 
      endYear, 
      jobDescription 
    } = this.props.experience;
    
    return (
      <div className='input-container'>
        <Input 
          type='text' 
          placeholder='Job Title' 
          onChange={(e) => this.handleOnChange('jobTitle', e)} 
          defaultValue={jobTitle} />
        <Input 
          type='text' 
          placeholder='Company Name'
          onChange={(e) => this.handleOnChange('companyName', e)} 
          defaultValue={companyName} />
        <Input 
          type='number' 
          placeholder='Start Year' 
          onChange={(e) => this.handleOnChange('startYear', e)} 
          defaultValue={startYear} />
        <Input 
          type='number' 
          placeholder='End Year' 
          onChange={(e) => this.handleOnChange('endYear', e)} 
          defaultValue={endYear} />
        <TextArea 
          rows='5' 
          placeholder='Describe your work...' 
          onChange={(e) => this.handleOnChange('jobDescription', e)} 
          defaultValue={jobDescription} /> 
      </div>
    );
  }
}

export default ExperienceFormInput;