import { useEffect, useState } from 'react';
import Input from './Input.js';

const EducationFormInput = (props) => {
  const { education, editEducation } = props;
  const { degreeTitle, schoolName, startYear, endYear} = education;
  const [educationInfo, setEducationInfo] = useState(education);

  const handleOnChange = (propName, e) => {
    setEducationInfo({
      ...educationInfo,
      [propName]: e.target.value
    });
  }

  useEffect(() => {
    editEducation(educationInfo)
  }, [educationInfo])

  return (
    <div className='input-container'>
      <Input 
        type='text' 
        placeholder='Degree Title' 
        onChange={(e) => handleOnChange('degreeTitle', e)} 
        defaultValue={degreeTitle} />
      <Input 
        type='text' 
        placeholder='School Name'
        onChange={(e) => handleOnChange('schoolName', e)} 
        defaultValue={schoolName} />
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
    </div>
  );
}

export default EducationFormInput;