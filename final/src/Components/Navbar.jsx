import React from 'react';
import { Link } from 'react-router-dom';
import { useDentistStates } from './utils/global.context';

const Navbar = () => {
  const { themeState, themeDispatch } = useDentistStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: 'SWITCH_DARK' });
    } else {
      themeDispatch({ type: 'SWITCH_LIGHT' });
    }
  };

  return (
    <nav>
      <div className="odonto-logo">
        <h2 className="logo-d">D</h2>
        <h2 className="logo-h">H</h2>
        <h2>Odonto</h2>
      </div>
      <div className="nav-links">
        <Link to="/">
          <h3>Inicio</h3>
        </Link>
        <Link to="/contact">
          <h3>Contacto</h3>
        </Link>
        <Link to="/favs">
          <h3>Favoritos</h3>
        </Link>
        <div>
          <button className='theme' onClick={switchTheme}>
            {themeState.theme ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
