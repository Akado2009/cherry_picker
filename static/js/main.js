import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import { Provider } from "react-redux";
import store from "./store";

import '../styles/base.css'


const initialState = {
  filename: '',
  databases: [
    'FIRST',
    'SECOND',
    'THREE'
  ],
  selectedDatabases: [

  ],
  geneSetsMode: '',
  geneSets: [
    'ONE',
    'TWO',
    'THREE'
  ],
  testTypeMode: '',
  testTypeChosen: [

  ]
};

ReactDOM.render(
  <Provider store={store.configure(initialState)}>
    <App />
  </Provider>
  , document.getElementById('app'))
