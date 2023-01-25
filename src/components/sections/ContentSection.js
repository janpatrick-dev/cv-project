import { useState } from 'react';
import DisplaySection from './DisplaySection';
import InputSection from './InputSection';
import Example from '../../Example';

const ContentSection = () => {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    introduction: '',
    urlLinkedIn: '',
    urlPortfolio: '',
    experiences: [],
    educations: []
  })

  const setInfo = (propName, newValue) => {
    setUserInfo({
      ...userInfo,
      [propName]: newValue
    })
  }
  
  const setExampleInfo = () => {
    setUserInfo(Example);
  }
  
  const handleOnEditExperience = (updatedExperience, index) => {
    const experiences = [...userInfo.experiences];
    experiences[index] = updatedExperience;
    setUserInfo({
      ...userInfo,
      experiences: experiences
    });
  }

  const handleOnEditEducation = (updatedEducation, index) => {
    const educations = [...userInfo.educations];
    educations[index] = updatedEducation;
    setUserInfo({
      ...userInfo,
      educations: educations
    });
  }
  
  return (
    <section className='section-content'>
      <InputSection 
        setInfo={setInfo} 
        setExampleInfo={setExampleInfo} 
        editExperience={handleOnEditExperience}
        editEducation={handleOnEditEducation}
        info={userInfo} />
      <DisplaySection info={userInfo} />
    </section>
  );
}

export default ContentSection;