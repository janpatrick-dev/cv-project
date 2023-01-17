import { Component } from 'react';
import PersonalSection from './PersonalSection';
import WorkSection from './WorkSection';

class DisplaySection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section-display'>
        <PersonalSection info={this.props.info} />
        <WorkSection info={this.props.info}  />
      </section>  
    );
  }
}

export default DisplaySection;