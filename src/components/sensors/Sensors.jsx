import React from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Item from './components/Item';
function Sensors() {
  return (
    <div className="sensors">
      <Header />
      <div className="line"></div>
      <Settings/>
      <div className="line"></div>
      <div className="sensors__added sensors-added">
        <div className="sensors-added__new"><span className="sensors-added__button"></span><h4 className="sensors-added__title">Добавить датчик</h4></div>
      </div>
      <div className="line"></div>
      
    </div>
  );
}

export default Sensors;
