import { Component } from 'react';
import Experience from '../Experience';
import uniqid from 'uniqid';

class WorkExperienceSection extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const experiences = this.props.experiences;
    return (
      <section className='section-experience'>
        <h2>Experience</h2>
        <hr />
        <div className='section-experience-list'>
          {experiences.map((experience) => {
            return <Experience key={uniqid()} info={experience} />
          })}
        </div>
      </section>
    );
  }
}

export default WorkExperienceSection;