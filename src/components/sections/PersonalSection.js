import { Component } from 'react';
import PersonalInfo from '../PersonalInfo';
import EducationSection from './EducationSection';

class PersonalSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { email, phoneNumber, urlLinkedIn, urlPortfolio } = this.props.info;

    return (
      <section className='section-display-personal'>
        <PersonalInfo infoType='Email' value={email} />
        <PersonalInfo infoType='Mobile Number' value={phoneNumber} />
        <PersonalInfo infoType='LinkedIn' value={urlLinkedIn} />
        <PersonalInfo infoType='Portfolio' value={urlPortfolio} />
        <EducationSection />
      </section>
    );
  }

}

export default PersonalSection;