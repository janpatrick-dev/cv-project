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
        <WorkExperienceSection experiences={[]} />
      </section>
    );
  }
}

export default WorkSection;