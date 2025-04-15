import React from 'react';
import ComponentWithGlobalState from './comonentWithGlobalState';
import ComponentWithoutGlobalState from './componentWithoutGlobalState';
import CounterComponent from './CounterComponen/Counter';
import CardComponent from './CardComponent/ccc';
const App = () => {

  return (
    <>
     
      <CardComponent />
    <CounterComponent />
    </>
  );
}


export default App;
