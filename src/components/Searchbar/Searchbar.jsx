import React, { Component } from 'react';
import css from './Searchbar.module.css';
import axios from 'axios';

class Searchbar extends Component {
  
  onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.search.value;

    async function getImages(images, page = 1) {
      const BASE_URL = 'https://pixabay.com/api/';
      const API_KEY = '35890843-7500688730c28920b4cfb1288';
      try {
        const response = await axios.get(
          `${BASE_URL}?key=${API_KEY}&q=${images}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
        );
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }

    getImages(input);
  };

  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form
            ref={this.formRef}
            className={css.form}
            onSubmit={this.onSubmit}
          >
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}></span>
              <svg width="24" height="24">
                <use href="/src/images/search.svg#search"></use>
              </svg>
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
