import { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleOnTextChange = (e) => {
    this.props.onChange(e);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { type, placeholder, defaultValue } = this.props;

    return (
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={this.handleOnTextChange}
        value={defaultValue ? defaultValue : this.state.value} 
        className='input' />
    );
  }
}

export default Input;