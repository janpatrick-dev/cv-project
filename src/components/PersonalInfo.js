import { Component } from 'react';
import Icon from '@mui/material/Icon';

class PersonalInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, infoType, value } = this.props;

    return (
      <div className='personal-info-row'>
        <p className='info-label'>
          <Icon className='info-icon'>{icon}</Icon>
          { infoType }
        </p>
        <p>{ value }</p> 
      </div>     
    );
  }
}

export default PersonalInfo;