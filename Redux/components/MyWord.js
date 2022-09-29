import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Setting from './Setting';

export default class MyWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {en ,vn, memorized, isShow} = this.props.myWord;
        const textDecorationLine = memorized? 'line-through': 'none';

        // const textShow = isShow? {vn} : '******';
        // const 
        return (
        <View style={{backgroundColor:'pink', margin: 20}}>
            <Text style={{textDecorationLine}}> {en}  </Text>
            {
                isShow? <Text>{vn}</Text> : <Text>*****</Text>
            }
            <Setting WordSend={this.props.myWord}/>
        </View>
        );
    }
}
