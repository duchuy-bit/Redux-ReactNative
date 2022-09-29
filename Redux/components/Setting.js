import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    memorizedWord(){
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.WordSend.id
        })
        console.log(this.props.arr.memorized)
    }

    showWord(){
        this.props.dispatch({
            type: 'SHOW',
            id: this.props.WordSend.id
        })
        
    }

    render() {
        const memorize = this.props.WordSend.memorized ? 'FORGET': 'MEMORIZED';
        const chechShow = this.props.WordSend.isShow ? 'HIDE': 'SHOW';

        return (
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=>this.memorizedWord()}>
                <Text style={{backgroundColor: 'green',color:'white',margin:20,padding:10}}>
                    {memorize}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.showWord()}>
                <Text style={{backgroundColor: 'green',color:'white',margin:20,padding:10}}>
                    {chechShow}
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

function mapStateToProp(state){
    return {
        myFilter : state.filterStatus,
        arr: state.arrWords
    }
}

export default connect(mapStateToProp)(Setting);