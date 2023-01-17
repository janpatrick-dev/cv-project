import { Component } from 'react';
import DisplaySection from './DisplaySection';
import InputSection from './InputSection';

class ContentSection extends Component {

  render() {

    return (
      <section className='section-content'>
        <InputSection />
        <DisplaySection />
      </section>
    );
  }
}

export default ContentSection;