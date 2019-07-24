import React, { useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Login from './components/Login'
import TodoList from './components/TodoList'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import { reducer, initialState } from './reducers/reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      <Router>
      <Route path="/" component={NavBar}></Route>
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={Login}></Route>
      {/* <h1>Todo List</h1> */}
      <Route 
        exact
        path="/todolist"
        render={props => <TodoList {...props} todos={state.tasks} toggleItem={toggleItem} addItem={addItem} clearCompleted={clearCompleted}/> }
        />
      </Router>
    </div>
  );
}



export default App;
