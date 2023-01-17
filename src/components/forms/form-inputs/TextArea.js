import { Component } from 'react';

class TextArea extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleOnTextChange = this.handleOnTextChange.bind(this);
  }

  handleOnTextChange(e) {
    this.props.onChange(e)
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    const { rows, placeholder, defaultValue } = this.props;

    return (
      <textarea 
        rows={rows} 
        placeholder={placeholder} 
        className='textarea' 
        onChange={this.handleOnTextChange} 
        value={defaultValue ? defaultValue : this.state.value} />
    );
  }
}

export default TextArea;