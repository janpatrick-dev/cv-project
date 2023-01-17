import { Component } from 'react';
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import PersonalInfoForm from '../forms/PersonalInfoForm';

class InputSection extends Component {

  constructor(props) {
    super(props);
  }

  setInfo = (propName, newValue) => {
    this.props.setInfo(propName, newValue)
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {

    return (
      <section className='section-input'>
        <form onSubmit={this.handleOnSubmit} className='input-form'>
          <PersonalInfoForm setInfo={this.setInfo} info={this.props.info} />
          <ExperienceForm />
          <EducationForm />
        </form>
      </section>  
    );
  }
}

export default InputSection;