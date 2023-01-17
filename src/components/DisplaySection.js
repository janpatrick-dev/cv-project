import { Component } from 'react';

class DisplaySection extends Component {

  render() {

    return (
      <section className='section-display'>
        <section className='section-display-personal'>
          Personal Info
        </section>
        <section className='section-display-professional'>
          Professional Profile
        </section>
      </section>  
    );
  }
}

export default DisplaySection;