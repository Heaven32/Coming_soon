import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../../Redux/rootReducer.js';
import { asyncIncrement, decrement, increment } from '../../Redux/actions.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './style.css';

const counter = document.getElementById('counter');
console.log(counter) // Why null?
const store = createStore(
  rootReducer,
  0, 
  applyMiddleware(thunk, logger),
);

const plusBtn = () => {
   store.dispatch(increment());
};

const minusBtn = () => {
  store.dispatch(decrement());
};

const asyncBtn = () => {
  store.dispatch(asyncIncrement());
};


store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({type: 'INIT_APPLICATION'})

const Contact = () => {
    return (
      <div className="container pt-5">
        <h1 className="heading">
            <span style={{color:"white",marginRight: "10px"}}>Redux</span>
            <button className="btn btn-info" id="theme">Сменить тему</button>
        </h1>
        <hr />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Счетчик: <span id="counter"></span></h5>
                <button className="btn btn-primary mr-2"  id="add" onClick={plusBtn}>Добавить</button>
                <button className="btn btn-danger mr-2" id="sub" onClick={minusBtn}>Убрать</button>
                <button className="btn btn-success mr-2" id="async" onClick={asyncBtn}>Async</button>
            </div>
        </div>
      </div>
    )
  }

export default Contact;