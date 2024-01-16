import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <nav className="header">
        <img className="header__logo" src='' alt='logo'></img>
        <div className='header__search'>
            <input type="text" className='header_searchInput'/>
            <searchIcon className="header__searchIcon" />
        </div>
      <div className="header__option">
        <span className="header__optionLineOne">Hello, User</span>
        <span className="header__optionLineTwo">Sign In or Sign Up</span>
      </div>
    </nav>
  );
}

export default Header