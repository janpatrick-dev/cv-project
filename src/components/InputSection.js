import { Component } from 'react';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import PersonalInfoForm from './forms/PersonalInfoForm';

class InputSection extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {

    return (
      <section className='section-input'>
        <form onSubmit={this.handleOnSubmit} className='input-form'>
          <PersonalInfoForm />
          <ExperienceForm />
          <EducationForm />
        </form>
      </section>  
    );
  }
}

export default InputSection;