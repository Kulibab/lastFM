import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../Constants/constants';
import c from './Header.module.scss';

const Header = () => {
  return (
    <div className={c.wrap}>
      <div className={c.nav}>
        <div className={c.item}>
          <NavLink to={routes.MAIN} exact activeClassName={c.active}>Top Tracks</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to={routes.SEARCH} activeClassName={c.active}>Search</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;