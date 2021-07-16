import React from 'react';
import { LoginScreen } from './screens/login';
import {createStore} from 'redux';

// redux 中的三个重要的部分：action reducer state (store)


function App() {
  const counterReducer = function(state = {count:1},action:any){
    console.log( action)
    switch(action.type){
      case 'test':
        return {
          ...state,count:state.count + 1
        }
        default:
          return state
    }
  }
  
  const store = createStore(counterReducer)
  
  console.log(store)

  store.dispatch({
    type:'test',
    payload:{}
  })

  return (
    <div>
      <LoginScreen />
    </div>
  );
}

export default App;
