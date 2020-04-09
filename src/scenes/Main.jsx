import React from 'react';
import Sensors from '../components/sensors/Sensors'
import Settings from '../components/settings/Settings'
import {connect} from "react-redux";

function Main(props) {
  return (
      <div className="container">
        <div className="content">
          <Sensors/>
          <Settings/>
        </div>
      </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

