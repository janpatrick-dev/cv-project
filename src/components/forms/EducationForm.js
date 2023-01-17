import { Component } from 'react';
import Input from './form-inputs/Input';

class EducationForm extends Component {
  
  render() {
    return (
      <section className='section-input-education'>
        <h2>Education</h2>
        <div className='input-container'>
          <Input type='text' placeholder='Degree Title' />
          <Input type='text' placeholder='School Name' />
          <Input type='number' placeholder='Start Year' />
          <Input type='number' placeholder='End Year' />
        </div>
      </section>
    );
  }
}

export default EducationForm;