import { Component } from 'react';
import ProfessionalHeaderSection from './ProfessionalHeaderSection';
import WorkExperienceSection from './WorkExperienceSection';
import WorkProfileSection from './WorkProfileSection';

class WorkSection extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { firstName, lastName, jobTitle } = this.props.info;
    return (
      <section className='section-display-professional'>
        <ProfessionalHeaderSection 
          firstName={firstName}
          lastName={lastName} 
          jobTitle={jobTitle} />
        <WorkProfileSection
          profileDescription='
            Adipisicing sit velit nostrud labore laboris. 
            Sunt labore proident consequat do consectetur. 
            Ex duis eiusmod est reprehenderit amet mollit velit culpa. 
            Quis consectetur dolor deserunt laboris minim deserunt consectetur culpa ex.' />
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