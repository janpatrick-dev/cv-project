import { Component } from 'react';
import Experience from '../Experience';

class WorkExperienceSection extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section-experience'>
        <h2>Experience</h2>
        <hr />
        <div className='section-experience-list'>
          {/* <Experience />
          <Experience />
          <Experience />
          <Experience /> */}
        </div>
      </section>
    );
  }
}

export default WorkExperienceSection;