import Avatar from '../Avatar';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';

const PersonalSection = (props) => {
  const { info } = props;
  const { urlAvatar, educations } = info;

    return (
      <section className='section-display-personal'>
        <Avatar imgSrc={urlAvatar} />
        <PersonalInfoSection info={info} />
        <EducationSection educations={educations} />
      </section>
    );
}

export default PersonalSection;