import React from 'react';
import Sensors from './components/sensors/Sensors'
import Settings from './components/settings/Settings'

function App() {
  return (
    <div className="container">
      <div className="content">
        <Sensors/>
        <Settings/>
      </div>
    </div>
  );
}

export default App;
