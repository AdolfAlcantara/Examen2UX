import React from 'react';
import {View,Text, StyleSheet,FlatList, CheckBox} from 'react-native';
import { Icon } from 'react-native-elements'
import DialogInput from 'react-native-dialog-input';
import ActionButton from 'react-native-action-button';





export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todolist:[
                {
                    key: 'Comer',
                    done:false,
                },
                {
                    key: 'Ejercicio',
                    done:false,
                },
            ],
            TodoCreator: false,
        };
    }   

    toggleOption=(item)=>{
        console.log('nada');
        let newlist = this.state.todolist;
        let x = newlist.indexOf(item);
        if(newlist[x].done){
            newlist[x].done = false;
        }else{
            newlist[x].done = true;
        }
        this.setState({todolist:newlist});
        console.log(x);
    }


    render(){
        return(
            <View style={styles.container}>
                <DialogInput 
                    isDialogVisible={this.state.TodoCreator}
                    title={"Ingresar nuevo ToDo"}
                    submitInput={ (inputText) => {this.sendInput(inputText)} }
                    closeDialog={ () => {this.setState({TodoCreator:false})}}>
                </DialogInput>
                <FlatList
                    data={this.state.todolist}
                    renderItem={({item}) =>
                                    <View style={styles.itemContainer}> 
                                        <CheckBox
                                            checked = {item.done}
                                            onPress={() => this.toggleOption(item)}
                                        />
                                            <Text style={styles.item}>{item.key}</Text>
                                    </View>
                                }
                />
                <ActionButton buttonColor="rgba(210,40,80,1)" onPress={()=>{this.setState({TodoCreator:true})}}/>
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
    // item: {
    //     padding: 10,
    //     fontSize: 18,
    //     height: 44,
    // },
    itemContainer:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingVertical: 5,
    }
  });