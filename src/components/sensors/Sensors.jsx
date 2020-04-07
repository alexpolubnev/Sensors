import React from 'react';
import Header from './Header';
import Settings from './Settings';
function Sensors() {
  return (
    <div className="sensors">
      <Header />
      <div className="line"></div>
      <Settings/>
    </div>
  );
}

export default Sensors;
