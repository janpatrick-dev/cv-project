import { Component } from 'react';

class WorkExperienceSection extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      jobTitle, 
      companyName, 
      startYear, 
      endYear, 
      jobDescription 
    } = this.props;

    return (
      <section className='section-experience'>
        <h2>Experience</h2>
        <hr />
        <div className='experience-row'>
          <h3>{jobTitle}</h3>
          <p>{companyName} ({startYear} - {endYear})</p>
          <p>{jobDescription}</p>
        </div>
      </section>
    );
  }
}

export default WorkExperienceSection;