import { Component } from 'react';

class InputSection extends Component {

  render() {

    return (
      <section className='section-input'>
        <section className='section-input-personal'>
          General Information
        </section>
        <section className='section-input-experience'>
          Experience
        </section>
        <section className='section-input-education'>
          Education
        </section>
      </section>  
    );
  }
}

export default InputSection;