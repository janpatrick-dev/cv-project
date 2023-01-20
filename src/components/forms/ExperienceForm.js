import { Component } from 'react';
import ExperienceFormInput from './form-inputs/ExperienceFormInput';
import uniqid from 'uniqid';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../buttons/ButtonComponent';

class ExperienceForm extends Component {

  constructor(props) {
    super(props);
  }

  handleOnAddClick = () => {
    const experiences = [...this.props.info.experiences];
    this.props.setInfo('experiences', experiences.concat({
      id: uuidv4(),
      jobTitle: '',
      jobDescription: '',
      companyName: '',
      startYear: '',
      endYear: ''
    }));
  }

  handleOnRemoveClick = () => {
    const experiences = [...this.props.info.experiences];
    experiences.pop();
    this.props.setInfo('experiences', experiences);
  }
  
  render() {

    const { experiences } = this.props.info;

    return (
      <section className='section-input-experience'>
        <h2>Experience</h2>
        <div className='form-container'>
          {experiences.map((experience, index) => {
            return <ExperienceFormInput 
              key={experience.id}
              editExperience={(e) => this.props.editExperience(e, index)} 
              experience={experience} />
          })}
        </div>
        <ButtonComponent
          label='Add'
          type='button'
          className='add-btn' 
          onClick={this.handleOnAddClick} />
        {experiences.length > 0 
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

export default ExperienceForm;