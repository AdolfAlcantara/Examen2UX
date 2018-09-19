import React from 'react';
import {View,Text, StyleSheet,FlatList, CheckBox} from 'react-native';

export default class Checked extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todolist:[]
        };
    }
    
    componentDidMount(){
        this.setState({
            todolist: this.props.todolist
        })
    }
     
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.todolist}
                    renderItem={({item}) =>
                                    <View style={styles.itemContainer}> 
                                        <CheckBox
                                            onPress={() => this.toggleOption(item)}
                                        />
                                            <Text style={styles.item}>{item.key}</Text>
                                    </View>
                                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})