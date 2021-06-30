import React from 'react';
import { LoginScreen } from './screens/login';
import { Test } from './test';
import {Title} from './title'

function App() {
  return (
    <div>
      <Title title='我是title'/>
      <Test />
      <LoginScreen />
    </div>
  );
}

export default App;
