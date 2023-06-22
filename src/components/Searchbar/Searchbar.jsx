import css from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search images..."
            className={css.input}
          />
          <button className={css.button} type="submit">
            <BsSearch size="18" />
          </button>
        </form>
      </header>
    </>
  );
};

export default Searchbar;
