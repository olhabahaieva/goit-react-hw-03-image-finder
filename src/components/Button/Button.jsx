import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    return <button className={css.button}>Load More</button>
  }
}

export default Button;
