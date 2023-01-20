import { Component } from 'react';
import Education from '../Education';
import uniqid from 'uniqid';

class EducationSection extends Component {
  
  render() {
    const educations = this.props.educations;
    return (
      <section className='section-display-personal-education'>
        <h2>Education</h2>
        <hr />
        <div className='education-list'>
          {educations.map((education) => {
            return <Education key={uniqid()} education={education} />
          })}
        </div>
      </section>
    );
  }
}

export default EducationSection;