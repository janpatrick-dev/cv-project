import WorkHeaderSection from './WorkHeaderSection';
import WorkExperienceSection from './WorkExperienceSection';
import WorkProfileSection from './WorkProfileSection';

const WorkSection = (props) => {
  const { firstName, lastName, jobTitle, introduction, experiences } = props.info;

  return (
    <section className='section-display-professional'>
      <WorkHeaderSection 
        firstName={firstName}
        lastName={lastName} 
        jobTitle={jobTitle} />
      <WorkProfileSection
        introduction={introduction} />
      <WorkExperienceSection experiences={experiences} />
    </section>
  );
}

export default WorkSection;