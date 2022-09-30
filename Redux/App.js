import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from "react-redux";
import Home from './components/Home';
import store from './redux/reducer/reducer';

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


