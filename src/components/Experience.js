const Experience = (props) => {
  const { 
    jobTitle, 
    companyName, 
    startYear, 
    endYear, 
    jobDescription } = props.info;

  return (
    <div className='experience-row'>
      <div className='experience-info'>
        <h3 className='experience-job-title'>{jobTitle}</h3>
        <p className='experience-company'>{companyName} ({startYear} - {endYear})</p>
      </div>
      <div>
        <p className='experience-description'>{jobDescription}</p>
      </div>
    </div>
  );
}

export default Experience;