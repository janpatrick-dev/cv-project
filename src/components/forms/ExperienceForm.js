import ExperienceFormInput from './form-inputs/ExperienceFormInput';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../buttons/ButtonComponent';

const ExperienceForm = (props) => {
  const { info, setInfo, editExperience } = props;
  const { experiences } = info;

  const handleOnAddClick = () => {
    const experiencesCopy = [...experiences];
    setInfo('experiences', experiencesCopy.concat({
      id: uuidv4(),
      jobTitle: '',
      jobDescription: '',
      companyName: '',
      startYear: '',
      endYear: ''
    }));
  }

  const handleOnRemoveClick = () => {
    const experiencesCopy = [...experiences];
    experiencesCopy.pop();
    setInfo('experiences', experiencesCopy);
  }

  return (
    <section className='section-input-experience'>
      <h2>Experience</h2>
      <div className='form-container'>
        {experiences.map((experience, index) => {
          return <ExperienceFormInput 
            key={experience.id}
            editExperience={(e) => editExperience(e, index)} 
            experience={experience} />
        })}
      </div>
      <ButtonComponent
        label='Add'
        type='button'
        className='add-btn' 
        onClick={handleOnAddClick} />
      {experiences.length > 0 
        ? <ButtonComponent
            label='Remove'
            type='button'
            className='remove-btn' 
            onClick={handleOnRemoveClick}/>
        : null}
    </section>
  );
}

export default ExperienceForm;