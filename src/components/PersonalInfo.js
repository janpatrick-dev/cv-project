import Icon from '@mui/material/Icon';

const PersonalInfo = (props) => {
  const { icon, infoType, value } = props;

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

export default PersonalInfo;