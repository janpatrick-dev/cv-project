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
  
  setDefaultInfo = () => {
    this.props.setDefaultInfo();
  }
  
  render() {
    return (
      <section className='section-input'>
        <form className='input-form'>
          <button type='button' className='load-example-btn' onClick={this.setDefaultInfo}>Load Example</button>
          <PersonalInfoForm setInfo={this.setInfo} info={this.props.info} />
          <ExperienceForm />
          <EducationForm />
        </form>
      </section>  
    );
  }
}

export default InputSection;