import Experience from '../Experience';
import uniqid from 'uniqid';

const WorkExperienceSection = (props) => {
  return (
    <section className='section-experience'>
      <h2>Experience</h2>
      <hr />
      <div className='section-experience-list'>
        {props.experiences.map((experience) => {
          return <Experience key={uniqid()} info={experience} />
        })}
      </div>
    </section>
  );
}

export default WorkExperienceSection;