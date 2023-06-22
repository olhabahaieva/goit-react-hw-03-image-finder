import React, { Component } from 'react';
import css from './Searchbar.module.css';
import getImages from 'getImages';
import { BsSearch } from "react-icons/bs";

class Searchbar extends Component {
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.search.value;

    getImages(input);
    this.setState = {
      images: this.images,
    }
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form
            ref={this.formRef}
            className={css.form}
            onSubmit={this.handleSubmit}
          >
            <button type="submit" className={css.button}>
             <BsSearch size="18"/>
            </button>

            <input
              name="search"
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
