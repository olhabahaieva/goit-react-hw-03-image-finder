import React from 'react';
import css from './Button.module.css';

const Button = ({onLoadMore}) => {
  return <button onClick={onLoadMore} className={css.button}>Load More</button>;
};

export default Button;
