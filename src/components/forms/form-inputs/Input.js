import { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      value: defaultValue ? defaultValue : ''
    };
  }

  handleOnTextChange = (e) => {
    this.props.onChange(e);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { type, placeholder } = this.props;

    return (
      <input 
        type={type} 
        placeholder={placeholder} 
        onChange={this.handleOnTextChange}
        value={this.state.value} 
        className='input' />
    );
  }
}

export default Input;