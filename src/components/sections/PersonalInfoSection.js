import PersonalInfo from '../PersonalInfo.js';

const PersonalInfoSection = (props) => {
  const { email, phoneNumber, urlLinkedIn, urlPortfolio } = props.info;

  return (
    <section className='section-personal-info'>
      <PersonalInfo icon='email' infoType='Email' value={email} />
      <PersonalInfo icon='call' infoType='Mobile Number' value={phoneNumber} />
      <PersonalInfo icon='groups' infoType='LinkedIn' value={urlLinkedIn} />
      <PersonalInfo icon='public' infoType='Portfolio' value={urlPortfolio} />
    </section>
  );
}

export default PersonalInfoSection;