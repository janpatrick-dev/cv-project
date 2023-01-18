import { Component } from 'react';
import DisplaySection from './DisplaySection';
import InputSection from './InputSection';
import Example from '../../Example';

class ContentSection extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      jobTitle: '',
      introduction: '',
      urlLinkedIn: '',
      urlPortfolio: '',
      experiences: [],
      educations: []
    }
    // this.state = Example;
  }

  setInfo = (propName, newValue) => {
    this.setState({
      ...this.state,
      [propName]: newValue
    })
  }
  
  setExampleInfo = () => {
    this.setState(Example);
  }
  
  handleOnEditExperience = (updatedExperience, index) => {
    const experiences = [...this.state.experiences];
    experiences[index] = updatedExperience;
    this.setState({
      ...this.state,
      experiences: experiences
    });
  }
  
  render() {
    return (
      <section className='section-content'>
        <InputSection 
          setInfo={this.setInfo} 
          setExampleInfo={this.setExampleInfo} 
          editExperience={this.handleOnEditExperience}
          info={this.state} />
        <DisplaySection info={this.state} />
      </section>
    );
  }
}

export default ContentSection;