import { Component } from 'react'
import PersonalInfo from '../PersonalInfo.js';

class PersonalInfoSection extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { email, phoneNumber, urlLinkedIn, urlPortfolio } = this.props.info;
    return (
      <section className='section-personal-info'>
        <PersonalInfo infoType='Email' value={email} />
        <PersonalInfo infoType='Mobile Number' value={phoneNumber} />
        <PersonalInfo infoType='LinkedIn' value={urlLinkedIn} />
        <PersonalInfo infoType='Portfolio' value={urlPortfolio} />
      </section>
    );
  }
}

export default PersonalInfoSection;