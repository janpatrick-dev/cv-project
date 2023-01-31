import { useEffect, useState } from 'react';
import Input from './Input.js';
import TextArea from './TextArea.js';

const ExperienceFormInput = (props) => {
  const { experience, editExperience } = props;
  const { jobTitle, companyName, startYear, endYear, jobDescription } = experience;
  const [experienceInfo, setExperienceInfo] = useState(experience);

  const handleOnChange = (propName, e) => {
    setExperienceInfo({
      ...experienceInfo,
      [propName]: e.target.value
    });
  }

  useEffect(() => {
    editExperience(experienceInfo)
  }, [experienceInfo])
    
  return (
    <div className='input-container'>
      <Input 
        type='text' 
        placeholder='Job Title' 
        onChange={(e) => handleOnChange('jobTitle', e)} 
        defaultValue={jobTitle} />
      <Input 
        type='text' 
        placeholder='Company Name'
        onChange={(e) => handleOnChange('companyName', e)} 
        defaultValue={companyName} />
      <Input 
        type='number' 
        placeholder='Start Year' 
        onChange={(e) => handleOnChange('startYear', e)} 
        defaultValue={startYear} />
      <Input 
        type='number' 
        placeholder='End Year' 
        onChange={(e) => handleOnChange('endYear', e)} 
        defaultValue={endYear} />
      <TextArea 
        rows='5' 
        placeholder='Describe your work...' 
        onChange={(e) => handleOnChange('jobDescription', e)} 
        defaultValue={jobDescription} /> 
    </div>
  );
}

export default ExperienceFormInput;