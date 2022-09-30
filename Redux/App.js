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
  switch (action.type){
    case 'FILTER_SHOW_ALL': 
      return {...state, filterStatus:  'SHOW_ALL'};
    case 'FILTER_MEMORIZED': 
      return {...state, filterStatus:  'MEMORIZED'};
    case 'FILTER_PRACTICE': 
      return {...state, filterStatus:  'PRACTICE'};
    case 'TOGGLE_MEMORIZED':
      // console.log('ca')
      return {
        ...state,
        arrWords: state.arrWords.map(e=>{
          if(e.id === action.id) return {...e, memorized: !e.memorized}
          else return e;
        }) 
      }
    case 'SHOW':
      return{
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id === action.id) return {...e, isShow: !e.isShow}
          return e;
        })
      }
    case 'ADD':
      return {...state,isAdding: !state.isAdding};
    case 'NEWVOCABULARY':
      addArr = [{id : state.arrWords.length+1, en: action.en, vn: action.vn, memorized: false, isShow: true} ]
      console.log(addArr[0].id)
      return {
        // ...state, arrWords: state.arrWords.push(addArr[0])
        ...state, arrWords: [addArr[0],...state.arrWords]
      }
  }
  return state;
}

// tao ra store
const store = createStore(reducer);

//tich hop vao trong ung dung react