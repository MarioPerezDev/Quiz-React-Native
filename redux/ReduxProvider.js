import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import App from '../App';
import GameScreen from '../GameScreen';
import IndexScreen from '../index_screen';
import {questionAnswer} from './actions'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Profile from '../Profile'
import Icon3 from 'react-native-vector-icons/Ionicons';


const AppNavigator =createAppContainer(createStackNavigator({
 InitialScreen: {
 screen: IndexScreen,
navigationOptions : ({ navigation, screenProps }) => (
{
  		headerTitle: "Quiz App!",
	    headerRight: (
		<TouchableHighlight style={{borderRadius:50}} onPress={()=>{ navigation.navigate('Profile')}}>
	    <Icon3 name="md-contact" size={30} color="white" padding={20} />
	    </TouchableHighlight>	    ),
	    headerRightContainerStyle: {padding:20},
	    headerTintColor: "white",
	   	headerTitleStyle: {flex: 1, textAlign: 'center'},
	    headerStyle: {backgroundColor:"#4285F4"},
    }),
 },
 GameScreen: {
 screen: GameScreen,
 navigationOptions: ({ navigation, screenProps }) => (
	    {
	    headerTitle: `Juego`,
	    headerRight: (
	   	<TouchableHighlight style={{borderRadius:50}} onPress={()=>{ navigation.navigate('Profile')}}>
	    <Icon3 name="md-contact" size={30} color="white" padding={20} />
	    </TouchableHighlight>
	    ),
	    headerRightContainerStyle: {padding:20},
	    headerTintColor: "white",
	    headerTitleStyle: {flex: 1, textAlign: 'center'},
	    headerStyle: {backgroundColor:"#4285F4"},
    }),
 },
 Profile: {
 screen: Profile,
 navigationOptions: ({ navigation, screenProps }) => (
 {
	    headerTitle: `Author`,
	    headerRight: (
		<TouchableHighlight style={{borderRadius:50}} onPress={()=>{ navigation.navigate('Profile')}}>
	    <Icon3 name="md-contact" size={30} color="white" padding={20} />
	    </TouchableHighlight>	    ),
	    headerRightContainerStyle: {padding:20},
	    headerTintColor: "white",
	    headerTitleStyle: {flex: 1, textAlign: 'center'},
	    headerStyle: {backgroundColor:"#4285F4"},
    }),
 }
 },{
 initialRouteName: "InitialScreen",
}))


export default class ReduxProvider extends React.Component {
constructor(props) {
super(props);
this.initialState = {
score: 0,
finished: false,
currentQuestion: 0,
questions : []};
this.store = this.configureStore();
}

render() {
return (
<Provider store={ this.store }>
<View style={{flex:8}}>
<AppNavigator/>
</View>
</Provider>
);
}
configureStore() { return createStore(GlobalState, this.initialState); }
}
