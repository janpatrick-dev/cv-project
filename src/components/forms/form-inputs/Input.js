import { useState } from "react";

const Input = (props) => {
  const { type, placeholder, defaultValue, onChange } = props;
  const [value, setValue] = useState('');

  const handleOnTextChange = (e) => {
    onChange(e);
    setValue(e.target.value);
  }

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      onChange={handleOnTextChange}
      value={defaultValue ? defaultValue : value} 
      className='input' />
  );
}

export default Input;