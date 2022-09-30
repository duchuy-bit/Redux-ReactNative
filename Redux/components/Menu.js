import React, { Component } from 'react';
import { View, Text ,TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
// import { act } from 'react-test-renderer';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    getTextStyle(statusName){
        const filterStatus = this.props.myFilter;
        if (statusName === filterStatus) return{
            color: 'pink',
            fontWeight: 'bold',
        }
        else return{
            color:'black',
            fontWeight: 'normal'
        }   
    }

    setFilterStatus(actionType){
        this.props.dispatch({ type: actionType });
    }

    render() {
        return (
            <View style={{margin: 30,flexDirection:"row",justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_SHOW_ALL')}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW_ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_MEMORIZED')}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setFilterStatus('FILTER_PRACTICE')}>
                    <Text style={this.getTextStyle('PRACTICE')}>NEED_PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProp(state){
    return {
        myFilter : state.filterStatus,
        arr: state.arrWords,
        
    }
}

export default connect(mapStateToProp)(Menu);