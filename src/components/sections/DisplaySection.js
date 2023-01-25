import PersonalSection from './PersonalSection';
import WorkSection from './WorkSection';

const DisplaySection = (props) => {
  const { info } = props;

  return (
    <section className='section-display'>
      <PersonalSection info={info} />
      <WorkSection info={info}  />
    </section>  
  );
}

export default DisplaySection;