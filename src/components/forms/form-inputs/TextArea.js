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
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    const { rows, placeholder } = this.props;

    return (
      <textarea 
        rows={rows} 
        placeholder={placeholder} 
        className='textarea' 
        onChange={this.handleOnTextChange} 
        value={this.state.value} />
    );
  }
}

export default TextArea;