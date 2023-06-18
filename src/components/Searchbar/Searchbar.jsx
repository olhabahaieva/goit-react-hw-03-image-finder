import React, { Component } from 'react'
import css from './Searchbar.module.css'

class Searchbar extends Component {
  render(){
 return <>
  <header className={css.searchbar}>
   <form className={css.form}>
     <button type="submit" class="button">
       <span className={css.buttonLabel}>Search</span>
     </button>
  
     <input
       className={css.input}
       type="text"
       autocomplete="off"
       autofocus
       placeholder="Search images and photos"
     />
   </form>
  </header>
</>
  }
}

export default Searchbar;