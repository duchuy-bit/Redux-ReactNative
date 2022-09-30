import React, { Component } from 'react';
import { View, Text,FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MyWord from './MyWord';
import Menu from './Menu';
import Add from './Add';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getWordList(){
        const filter = this.props.myFilter;
        if(filter === 'SHOW_ALL') return this.props.arr;
        if(filter === 'MEMORIZED') return this.props.arr.filter(e=> e.memorized);
        if(filter === 'PRACTICE') return this.props.arr.filter(e=> !e.memorized);
        return []; 
    }

    addVocabulary(){
        this.props.dispatch({type: 'ADD'})
    }

    render() {
        return (
        <View>
            <Text> Home </Text>
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                <Text>{this.props.myFilter}</Text>
                {/* button add tai daay */}

                <TouchableOpacity onPress={()=>this.addVocabulary()}>
                    <View style={{backgroundColor: 'pink',height:50,width: 75,justifyContent: 'center',alignItems: 'center'}}>
                        <Text> + </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Component Add duoc them tai day */}
            {
                this.props.isAdd ? <Add/> : null

            }

            <Menu/>

            <FlatList
                data={this.getWordList()}
                // key={this.props.arr.id}
                renderItem={({item})=>{
                    return(
                        <View>
                            {/* <Text>{item.en}: {item.vn}</Text> */}
                            <MyWord myWord={item}/>
                        </View>
                    )
                }}
            />
        </View>
        );
    }
}
function mapStateToProp(state){
    return {
        myFilter : state.filterStatus,
        arr: state.arrWords,
        isAdd: state.isAdding
    }
}

export default connect(mapStateToProp)(Home);
