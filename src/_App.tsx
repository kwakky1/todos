import React from 'react';
import ToDoInput from "./schedule/ToDoInput";
import ToDoList from "./schedule/ToDoList";
import {Provider} from 'react-redux';
import store from './schedule/store/index'

const _App = () => {
  return (
      <>
          <Provider store = {store}>
            <ToDoInput/> <br/> <ToDoList/>
          </Provider>
      </>
  );
};

export default _App;


