const Avatar = (props) => {
  const { imgSrc } = props;

  return (
    <div className='avatar-container'>
      <img src={imgSrc} className='avatar-img' />
    </div>
  );
}

export default Avatar;