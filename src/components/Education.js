import { Component } from 'react';

class Education extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { degreeTitle, schoolName, startYear, endYear } = this.props;
    
    return (
      <div className='education-row'>
        <h3>{degreeTitle}</h3>
        <p>{schoolName}</p>
        <p>{startYear} - {endYear}</p>
      </div>
    );
  }
}

export default Education;