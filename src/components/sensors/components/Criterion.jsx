import React, {useState} from 'react';


function Criterion(props) {

  const [active, setActive] = useState(false)

  const changeStatus = () => {
    if (active === 'top'){
      setActive('bottom');
    }else {
      setActive('top');
    }
  }
  
  let cls = "sensors-settings__title"
  if (active === 'top'){
    cls = "sensors-settings__title top"
  }else if (active === 'bottom'){
    cls = "sensors-settings__title bottom"
  }
  return (
      <h3 className={cls} onClick={changeStatus}><span>▼</span>{props.criterion}</h3>
  );
}

export default Criterion;
