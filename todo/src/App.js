import React, { useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import FormInput from './components/FormInput'
import TodoList from './components/TodoList'
import { reducer, initialState } from './reducers/reducers'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const toggleItem = item => {
    dispatch({ type: 'TOGGLE_ITEM', payload: item})
  }

  const clearCompleted = (e) => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <TodoList todos={state.tasks} toggleItem={toggleItem} clearCompleted={clearCompleted} />
      <FormInput addItem={addItem}/>
    </div>
  );
}

export default App;
