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
        <PersonalInfo icon='email' infoType='Email' value={email} />
        <PersonalInfo icon='call' infoType='Mobile Number' value={phoneNumber} />
        <PersonalInfo icon='groups' infoType='LinkedIn' value={urlLinkedIn} />
        <PersonalInfo icon='public' infoType='Portfolio' value={urlPortfolio} />
      </section>
    );
  }
}

export default PersonalInfoSection;