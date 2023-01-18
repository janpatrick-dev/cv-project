import { Component } from 'react';
import Education from '../Education';

class EducationSection extends Component {
  
  render() {
    return (
      <section className='section-display-personal-education'>
        <h2>Education</h2>
        <hr />
        <div className='education-list'>
          {/* <Education
            degreeTitle='Degree Example 1'
            schoolName='School Example 1'
            startYear='2012'
            endYear='2018'
          />
          <Education
            degreeTitle='Degree Example 2'
            schoolName='School Example 2'
            startYear='2008'
            endYear='2012'
          /> */}
        </div>
      </section>
    );
  }
}

export default EducationSection;