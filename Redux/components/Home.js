import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View>
            <Text> Home </Text>
            <Text>{this.props.myFilter}</Text>
        </View>
        );
    }
}
function mapStateToProp(state){
    return {
        myFilter : state.filterStatus
    }
}

export default connect(mapStateToProp)(Home);
