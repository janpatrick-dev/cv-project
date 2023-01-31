import EducationFormInput from './form-inputs/EducationFormInput';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../buttons/ButtonComponent';

const EducationForm = (props) => {
  const { info, setInfo, editEducation } = props;
  const { educations } = info;

  const handleOnAddClick = () => {
    const educationsCopy = [...educations];
    setInfo('educations', educationsCopy.concat({
      id: uuidv4(),
      degreeTitle: '',
      schoolName: '',
      startYear: '',
      endYear: ''
    }));
  }

  const handleOnRemoveClick = () => {
    const educationsCopy = [...educations];
    educationsCopy.pop();
    setInfo('educations', educationsCopy);
  }

  return (
    <section className='section-input-education'>
      <h2>Education</h2>
      <div className='form-container'>
        {educations.map((education, index) => {
          return <EducationFormInput 
            key={education.id}
            editEducation={(e) => editEducation(e, index)} 
            education={education} />
        })}
      </div>
      <ButtonComponent
        label='Add'
        type='button'
        className='add-btn' 
        onClick={handleOnAddClick} />
      {educations.length > 0 
        ? <ButtonComponent
            label='Remove'
            type='button'
            className='remove-btn' 
            onClick={handleOnRemoveClick}/>
        : null}
    </section>
  );
}

export default EducationForm;