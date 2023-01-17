import { Component } from 'react';

class PersonalInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { infoType, value } = this.props;

    return (
      <div className='personal-info-row'>
        <p>{ infoType }</p>
        <p>{ value }</p> 
      </div>     
    );
  }
}

export default PersonalInfo;