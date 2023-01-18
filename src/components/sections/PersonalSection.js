import { Component } from 'react';
import Avatar from '../Avatar';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';

class PersonalSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section-display-personal'>
        <Avatar imgSrc={this.props.info.urlAvatar} />
        <PersonalInfoSection info={this.props.info} />
        <EducationSection />
      </section>
    );
  }

}

export default PersonalSection;