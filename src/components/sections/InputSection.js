import { Component } from 'react';
import ButtonComponent from '../buttons/ButtonComponent';
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import PersonalInfoForm from '../forms/PersonalInfoForm';

const InputSection = (props) => {

  const setInfo = (propName, newValue) => {
    props.setInfo(propName, newValue)
  }
  
  const setExampleInfo = () => {
    props.setExampleInfo();
  }
  
  return (
    <section className='section-input'>
      <form className='input-form'>
        <ButtonComponent
          label='Load Example CV'
          type='button'
          className='load-example-btn'
          onClick={setExampleInfo} />
        <PersonalInfoForm 
          setInfo={setInfo} 
          info={props.info} />
        <ExperienceForm 
          setInfo={setInfo} 
          info={props.info}
          editExperience={props.editExperience} />
        <EducationForm
          setInfo={setInfo} 
          info={props.info}
          editEducation={props.editEducation} />
      </form>
    </section>  
  );
}

export default InputSection;