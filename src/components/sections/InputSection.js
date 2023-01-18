import { Component } from 'react';
import ButtonComponent from '../buttons/ButtonComponent';
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import PersonalInfoForm from '../forms/PersonalInfoForm';
import { v4 as uuidv4 } from 'uuid';

class InputSection extends Component {

  constructor(props) {
    super(props);
  }

  setInfo = (propName, newValue) => {
    this.props.setInfo(propName, newValue)
  }
  
  setExampleInfo = () => {
    this.props.setExampleInfo();
  }
  
  render() {
    return (
      <section className='section-input'>
        <form className='input-form'>
          <ButtonComponent
            label='Load Example CV'
            type='button'
            className='load-example-btn'
            onClick={this.setExampleInfo} />
          <PersonalInfoForm 
            setInfo={this.setInfo} 
            info={this.props.info} />
          <ExperienceForm 
            setInfo={this.setInfo} 
            info={this.props.info}
            editExperience={this.props.editExperience} />
          <EducationForm />
        </form>
      </section>  
    );
  }
}

export default InputSection;