// import { LOGGINED } from "./action-types";

const initialState = {
  items: [
    {
      id: '12343301',
      type: 'Освещенность',
      device: ['123456', '4-20 IN1'],
      position: 'карта',
      currentIndicator: [500, 'LX'],
      range: ['от', 200, 'до', 800, 'LX'],
      optimalIndicator: ['+15', '°C'],
      minIndicator: ['-5', '°C'],
      maxIndicator: ['+15', '°C'],
    },
    {
      id: '12343301',
      type: 'Дверь',
      device: ['123456', 'SW1'],
      position: 'карта',
      currentIndicator: ['закрыто'],
      optimalIndicator: ['закрыто'],
    },
    {
      id: '12343303',
      type: 'Температура',
      device: ['123456', 'SW2'],
      position: 'карта',
      currentIndicator: ['+10', '°C'],
      range: ['от', '-10', 'до', '+30', '°C'],
      optimalIndicator: ['+15', '°C'],
      minIndicator: ['-5', '°C'], 
      maxIndicator: ['+15', '°C'],
    },
    {
      id: '12343304',
      type: 'Влажность',
      device: ['123456', 'SW3'],
      position: 'карта',
      currentIndicator: ['10', '%'],
      range: ['от', '5', 'до', '15', '%'],
      optimalIndicator: ['10', '%'],
      minIndicator: ['0', '°C'], 
      maxIndicator: ['20', '°C'],
    },
    {
      id: '12343305',
      type: 'Температура',
      device: ['123456', 'SW2'],
      position: 'карта',
      currentIndicator: '+10 °C',
      range: 'от -10 до +30 °C',
      optimalIndicator: '+15 °C',
      minIndicator: '-5 °C', 
      maxIndicator: '+15 °C',
    },
    {
      id: '12343306',
      type: 'Температура',
      device: ['123456', 'SW2'],
      position: 'карта',
      currentIndicator: '+10 °C',
      range: 'от -10 до +30 °C',
      optimalIndicator: '+15 °C',
      minIndicator: '-5 °C', 
      maxIndicator: '+15 °C',
    },
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case LOGGINED:
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
};
