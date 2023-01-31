import { useState } from 'react';

const TextArea = (props) => {
  const { rows, placeholder, defaultValue, onChange } = props;
  const [value, setValue] = useState('');

  const handleOnTextChange = (e) => {
    onChange(e);
    setValue(e.target.value);
  }

  return (
    <textarea 
      rows={rows} 
      placeholder={placeholder} 
      className='textarea' 
      onChange={handleOnTextChange} 
      value={defaultValue ? defaultValue : value} />
  );
}

export default TextArea;