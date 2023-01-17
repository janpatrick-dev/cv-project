import { Component } from 'react';

class WorkProfileSection extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { profileDescription } = this.props;
    return (
      <section className='section-profile'>
        <h2>Professional Profile</h2>
        <hr />
        <p>{ profileDescription }</p>
      </section>
    );
  }
}

export default WorkProfileSection;