import React, { useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import FormInput from './components/FormInput'
import { reducer, initialState } from './reducers/reducers'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  return (
    <div className="App">
      <FormInput addItem={addItem}/>
    </div>
  );
}

export default App;
