import { Component } from 'react';
import WorkHeaderSection from './WorkHeaderSection';
import WorkExperienceSection from './WorkExperienceSection';
import WorkProfileSection from './WorkProfileSection';

class WorkSection extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { firstName, lastName, jobTitle, introduction } = this.props.info;
    return (
      <section className='section-display-professional'>
        <WorkHeaderSection 
          firstName={firstName}
          lastName={lastName} 
          jobTitle={jobTitle} />
        <WorkProfileSection
          introduction={introduction} />
        <WorkExperienceSection 
          jobTitle='Software Engineer'
          companyName='Mad Underground'
          startYear='2019'
          endYear='2022'
          jobDescription='Velit pariatur qui magna do. Veniam esse laboris Lorem adipisicing elit nulla sunt veniam in. Pariatur ullamco nostrud aliquip dolor tempor. Ea in non pariatur nulla aliqua tempor est aute ea amet aliqua sunt irure velit. Nostrud sit quis labore minim excepteur in ullamco ea magna est culpa do.' />
      </section>
    );
  }
}

export default WorkSection;