const Education = (props) => {
  const { degreeTitle, schoolName, startYear, endYear } = props.education;
  
  return (
    <div className='education-row'>
      <h3 className='education-degree-title'>{degreeTitle}</h3>
      <div className='education-info'>
        <p className='education-school-name'>{schoolName}</p>
        <p className='education-school-year'>{startYear} - {endYear}</p>
      </div>
    </div>
  );
}

export default Education;