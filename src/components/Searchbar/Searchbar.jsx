import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.search.value.trim();

    if (input) {
      this.props.onSubmit(input);
      form.reset();
    }
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <input
            type="text"
            placeholder="Search images..."
            name="search"
            autocomplete="off"
            autofocus
            className={css.input}
          />
          <button className={css.button} type="submit">
            <BsSearch size="18" />
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
