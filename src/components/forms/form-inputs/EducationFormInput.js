import { Component } from 'react';
import Input from './Input.js';

class EducationFormInput extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.education;
  }

  handleOnChange = (propName, e) => {
    this.setState({
      ...this.state,
      [propName]: e.target.value
    }, () => this.props.editEducation(this.state));
  }

  render() {
    const { 
      degreeTitle, 
      schoolName, 
      startYear, 
      endYear
    } = this.props.education;
    
    return (
      <div className='input-container'>
        <Input 
          type='text' 
          placeholder='Degree Title' 
          onChange={(e) => this.handleOnChange('degreeTitle', e)} 
          defaultValue={degreeTitle} />
        <Input 
          type='text' 
          placeholder='School Name'
          onChange={(e) => this.handleOnChange('schoolName', e)} 
          defaultValue={schoolName} />
        <Input 
          type='number' 
          placeholder='Start Year' 
          onChange={(e) => this.handleOnChange('startYear', e)} 
          defaultValue={startYear} />
        <Input 
          type='number' 
          placeholder='End Year' 
          onChange={(e) => this.handleOnChange('endYear', e)} 
          defaultValue={endYear} />
      </div>
    );
  }
}

export default EducationFormInput;