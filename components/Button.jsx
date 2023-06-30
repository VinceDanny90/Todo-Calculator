
import React from 'react';

const Button = ({ image, onClick }) => {
  return <img src={image} alt="Button" onClick={onClick} />;
};

export default Button;
