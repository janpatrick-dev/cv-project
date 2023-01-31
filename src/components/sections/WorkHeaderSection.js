const WorkHeaderSection = (props) => {
  const { firstName, lastName, jobTitle } = props;

  return (
    <section className='section-display-header'>
      <h1>
        <p className='display-first-name'>{ firstName }</p>
        <p className='display-last-name'>{ lastName }</p>
      </h1>
      <p className='display-job-title'>{ jobTitle }</p>
    </section>
  )
}

export default WorkHeaderSection;