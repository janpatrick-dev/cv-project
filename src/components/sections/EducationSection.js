import { Component } from 'react';
import Education from '../Education';

class EducationSection extends Component {
  
  render() {
    return (
      <section className='section-display-personal-education'>
        <h2>Education</h2>
        <hr />
        <div className='education-list'>
          <Education
            degreeTitle='BSIT with Specialization in Animation and Game Development'
            schoolName='FEU Institute of Technology'
            startYear='2012'
            endYear='2018'
          />
          <Education
            degreeTitle='High School'
            schoolName='St. Joseph School, Gagalangin'
            startYear='2008'
            endYear='2012'
          />
        </div>
      </section>
    );
  }
}

export default EducationSection;