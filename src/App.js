import React from 'react';
import FunctionalComp from './Components/FunctionalComponent';
import ClassComp from './Components/ClassComponent';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import Welcomebox from './Components/Welcomebox';
import Dashboardbox from './Components/Dashboardbox';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Ford !</h1>
      <FunctionalComp />
      <ClassComp />
      <Click />
      <Counter />
      <ParentComp />
      <div className='rowC'>
        <Welcomebox />
        <Dashboardbox />
      </div>
    </div>
  );
}

export default App;
