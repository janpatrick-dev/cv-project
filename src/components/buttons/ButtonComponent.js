const ButtonComponent = (props) => {
  const { label, type, className, onClick } = props;

  const onClickEvent = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button className={className} type={type} onClick={onClickEvent}>{label}</button>
  );
}

export default ButtonComponent;