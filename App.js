import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {createDrawerNavigator,createStackNavigator, DrawerItems} from 'react-navigation';
import { Icon } from 'react-native-elements'

import HomeScreen from './container/Home';
import CheckedScreen from './container/Checked';


const HomeStack = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:({navigation}) => ({
      title:'TODO Task',
      headerLeft:<Icon name="menu" size={30} onPress={()=>navigation.openDrawer()}/>,
    })
  }
})

const CheckedStack = createStackNavigator({
  Done:{
    screen: CheckedScreen,
  }
})

const DrawerContent = (props) => (
  <ScrollView>
    <Text>Raul's List</Text>
    <DrawerItems {...props} />
  </ScrollView>
)

export default  App = createDrawerNavigator({
  Main: {
    screen: HomeStack,
  },
  Checked:{
    screen: CheckedStack,
  }
},{
  contentComponent: props => <DrawerContent {...props} />
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
