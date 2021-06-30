import React from 'react';
import { LoginScreen } from './screens/login';
import { Test } from './test';
import {Title} from './title'

function App() {
  return (
    <div>
      <Title title='我是title'/>
      <Title title='我是who'/>
      <Test />
      <Test />
      <LoginScreen />
    </div>
  );
}

export default App;
