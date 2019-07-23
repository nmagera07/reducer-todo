import React, { useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import FormInput from './components/FormInput'
import TodoList from './components/TodoList'
import NavBar from './components/NavBar'
import { reducer, initialState } from './reducers/reducers'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  var moment = require('moment');
    moment().format();

  const addItem = (e, item) => {
    e.preventDefault()
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const toggleItem = item => {
    moment().startOf('hour').fromNow()
    dispatch({ type: 'TOGGLE_ITEM', payload: item})
  }

  const clearCompleted = (e) => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <NavBar />
      <h1>Todo List</h1>
      <TodoList todos={state.tasks} toggleItem={toggleItem} />
      <FormInput addItem={addItem} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
