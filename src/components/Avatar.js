import { Component } from 'react';

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='avatar-container'>
        <img src='' className='avatar-img' />
      </div>
    );
  }
}

export default Avatar;