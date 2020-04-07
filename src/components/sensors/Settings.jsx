import React from "react";
import Criterion from "./Criterion";
function Settings() {
  return (
    <div className="sensors__settings sensors-settings">
      <div className="sensors-settings__id">
        <input id="id" className="sensors-settings__checkbox" type="checkbox" />
        <label htmlFor="id" className="sensors-settings__label">
          <h3 className="sensors-settings__title">ID</h3>
        </label>
      </div>
      <div className="sensors-settings__sort">
        <Criterion criterion={"Тип"} />
        <Criterion criterion={"Устройство"} />
        <Criterion criterion={"Положение"} />
        <Criterion criterion={"Показатель"} />
      </div>
    </div>
  );
}

export default Settings;
