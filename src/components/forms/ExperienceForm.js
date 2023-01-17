import { Component } from 'react';
import Input from './form-inputs/Input';
import TextArea from './form-inputs/TextArea';

class ExperienceForm extends Component {
  
  render() {
    return (
      <section className='section-input-experience'>
        <h2>Experience</h2>
        <div className='input-container'>
          <Input type='text' placeholder='Job Title' />
          <Input type='text' placeholder='Company Name' />
          <Input type='number' placeholder='Start Year' defaultValue='1950' />
          <Input type='number' placeholder='End Year' defaultValue={new Date().getFullYear()} />
          <TextArea rows='5' placeholder='Describe your work...' /> 
        </div>
      </section>
    );
  }
}

export default ExperienceForm;