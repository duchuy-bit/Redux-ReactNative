import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import Home from './components/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Home/>
        </View>
      </Provider>
    );
  }
}


const defaultState = {
  arrWords: [
      {id: 1, en: 'action', vn: "hanh dong", memorized: true, isShow: true},
      {id: 2, en: 'alo', vn: "alo", memorized: false, isShow: true},
      {id: 3, en: 'abc', vn: "abc", memorized: true, isShow: true},
      {id: 4, en: 'dfs', vn: "dfs", memorized: true, isShow: false},
      {id: 5, en: 'eg', vn: "eg", memorized: false, isShow: true},
      {id: 6, en: 'bb', vn: "bb", memorized: true, isShow: false},
      {id: 7, en: 'cc', vn: "cc", memorized: true, isShow: true},
      {id: 8, en: 'đd', vn: "đd", memorized: false, isShow: false},
      {id: 9, en: 'ggsd', vn: "ggsd", memorized: false, isShow: true},
      {id: 10, en: 'sngsf', vn: "sngsf", memorized: true, isShow: false},
      {id: 11, en: 'sngsf', vn: "sngsf", memorized: false, isShow: false},
      {id: 12, en: 'vagraa', vn: "vagraa", memorized: true, isShow: true},
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false,
}

// reducer -> tien doan action
const reducer = (state = defaultState , action) =>{
  return state;
}

// tao ra store
const store = createStore(reducer);

//tich hop vao trong ung dung react