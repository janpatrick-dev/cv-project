import { Component } from 'react';
import EducationFormInput from './form-inputs/EducationFormInput';
import Input from './form-inputs/Input';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../buttons/ButtonComponent';

class EducationForm extends Component {

  constructor(props) {
    super(props);
  }
  
  handleOnAddClick = () => {
    const educations = [...this.props.info.educations];
    this.props.setInfo('educations', educations.concat({
      id: uuidv4(),
      degreeTitle: '',
      schoolName: '',
      startYear: '',
      endYear: ''
    }));
  }

  handleOnRemoveClick = () => {
    const educations = [...this.props.info.educations];
    educations.pop();
    this.props.setInfo('educations', educations);
  }

  render() {
    const { educations } = this.props.info;
    
    return (
      <section className='section-input-education'>
        <h2>Education</h2>
        <div className='form-container'>
          {educations.map((education, index) => {
            return <EducationFormInput 
              key={education.id}
              editEducation={(e) => this.props.editEducation(e, index)} 
              education={education} />
          })}
        </div>
        <ButtonComponent
          label='Add'
          type='button'
          className='add-btn' 
          onClick={this.handleOnAddClick} />
        {educations.length > 0 
          ? <ButtonComponent
              label='Remove'
              type='button'
              className='remove-btn' 
              onClick={this.handleOnRemoveClick}/>
          : null}
      </section>
    );
  }
}

export default EducationForm;