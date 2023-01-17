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
  
  render() {
    return (
      <section className='section-content'>
        <InputSection setInfo={this.setInfo} info={this.state} />
        <DisplaySection info={this.state} />
      </section>
    );
  }
}

export default ContentSection;