import React, { Component } from 'react';
import { View, Text,Dimensions,  TouchableOpacity ,TextInput } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import {connect} from "react-redux";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vocabulary: '',
            mean: '',
        };
    }

    addToStore(){
        if (this.state.vocabulary !== '' && this.state.mean !== ''){
            // console.log('');
            console.log(this.state.vocabulary);
            console.log(this.state.mean);

            this.props.dispatch({
                type: 'NEWVOCABULARY',
                en: this.state.vocabulary,
                vn: this.state.mean
            })

            this.setState({vocabulary: '',mean: ''})

            this.props.dispatch({type: 'ADD'})


        }
        else{
            console.log('Rong')
        }
    }

    handleVocabulary = (text) => {
        this.setState({ ...this.state, vocabulary: text })
    }

    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;


        return (
        <View style={{width: windowWidth, backgroundColor: 'pink',marginVertical:20}}>
            <Text>Vocabulary: </Text>
            <TextInput  
                value={this.state.vocabulary}
                // onChangeText={(vocabulary) => this.setState({...this.state, vocabulary})}
                onChangeText={(text) => this.setState({...this.state,vocabulary: text})}

                // onChangeText={(text)=> this.handleVocabulary(text)}
                style={{backgroundColor: 'white',width: windowWidth/2,marginHorizontal: 30,marginVertical:10}}
            />
            <Text></Text>
            <Text>Mean</Text>
            <TextInput  
                value={this.state.mean}
                // onChangeText={(text)=>{this.setState({...this.state, mean: text})}}
                onChangeText={(text) => this.setState({...this.state,mean: text})}
                style={{backgroundColor: 'white',width: windowWidth/2,marginHorizontal: 30,marginVertical:10}}
            />

            <TouchableOpacity onPress={()=>this.addToStore()}>
                <View style={{backgroundColor: '#00FFFf',padding:20,width:windowWidth/2,justifyContent: 'center',alignItems: 'center',marginHorizontal: windowWidth/4}}>
                    <Text>OK</Text>
                </View>
            </TouchableOpacity>
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

export default connect(mapStateToProp)(Add);