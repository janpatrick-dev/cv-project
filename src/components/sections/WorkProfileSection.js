const WorkProfileSection = (props) => {
  const { introduction } = props;

  return (
    <section className='section-profile'>
      <h2>Professional Profile</h2>
      <hr />
      <p>{ introduction }</p>
    </section>
  );
}

export default WorkProfileSection;