import { Component } from 'react';

class ButtonComponent extends Component {
  
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const { onClick } = this.props;
    
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { label, type, className } = this.props;
    return <button className={className} type={type} onClick={this.onClick}>{label}</button>;
  }
}

export default ButtonComponent;