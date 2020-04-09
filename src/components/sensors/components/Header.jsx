import React from 'react';

function Header() {
  return (
    <div className="sensors__header sensors-header">
      <h2 className="sensors-header__title">Датчики</h2>
      <div className="sensors-header__btns">
        <div className="sensors-header__img"><img className="sensors-header__burger" src="images/burger.svg" alt="burger"/></div>
        <div className="sensors-header__img"><img className="sensors-header__search" src="images/search.png" alt="search"/></div>
      </div>
    </div>
  );
}

export default Header;
