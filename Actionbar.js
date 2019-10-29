import React from 'react';
import { Text, TouchableHighlight, View, AsyncStorage, Alert } from 'react-native';
import {changeQuestion, submit, reset, initQuestions, directQuestion} from './redux/actions'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from './Button';





export class Actionbar extends React.Component {
	
_storeData = async () => {
	var quests = this.props.questions;
	const textval = this.props.currentQuestion+1;
  try {
    await AsyncStorage.setItem('@Quiz:questions',JSON.stringify(quests));
	await AsyncStorage.setItem('@Quiz:currentQuestion',JSON.stringify(this.props.currentQuestion));
	Alert.alert("Partida guardada", "La partida con pregunta actual " + textval + " ha sido guardada.")
  } catch (error) {
  	Alert.alert("Error","Error al guardar partida")
    // Error saving data
  }
};

_retrieveData = async () => {
  try {
    const value = await (AsyncStorage.getItem('@Quiz:questions'));
    const value2 = await (AsyncStorage.getItem('@Quiz:currentQuestion'));
    const value2good = JSON.parse(value2)
 	const questionsgood = JSON.parse(value)
 	const textvalue = value2good +1;

    if (value !== null) {
      // We have data!!
      this.props.dispatch(directQuestion(value2good));
      this.props.dispatch(initQuestions(questionsgood));
      Alert.alert("Partida cargada", "La partida con pregunta actual " + textvalue + " ha sido cargada.")
    }
    else{
Alert.alert("Error","No hay partidas guardadas")
    }
  } catch (error) {
    // Error retrieving data
  }
};
 

 _deleteData = async () => {
  let keys = ['@Quiz:questions', '@Quiz:currentQuestion'];
AsyncStorage.multiRemove(keys, (err) => {
  Alert.alert("Éxito", "La partida anterior ha sido eliminada.")
});
};

 
 render(){
 return (
<View style={{flex:1,flexDirection: 'column', justifyContent: "flex-start", borderWidth: 0.5, borderColor:"black"}}>
<View style={{flex:1,flexDirection: 'row', justifyContent: 'space-around', alignItems:"center"}}>



 		<TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			onPress={() => {this.props.dispatch(reset());
				this.props.init()}}>
		<Icon style={{margin:5}} name="reload1" size={31} color="white" />
		 </TouchableHighlight>

		 <TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			onPress={() => this._storeData()}>
		<Icon style={{margin:5}} name="save" size={31} color="white" />
		 </TouchableHighlight>

		 <TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			onPress={() => this._retrieveData()}>
		<Icon style={{margin:5}} name="download" size={31} color="white" />
		 </TouchableHighlight>

		 <TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			 onPress={() => this._deleteData()}>
			  <Icon style={{margin:5}} name="delete" size={31} color="white" />
		 </TouchableHighlight>

		 <TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			 disabled= {this.props.currentQuestion === 0 ? true : false}
			 onPress={() => this.props.dispatch(changeQuestion(-1))}>
			  <Icon style={{margin:5}} name="stepbackward" size={31} color="white" />
		 </TouchableHighlight>

		<Button
 			text="Envío"
 			onClick={() => this.props.dispatch(submit(this.props.questions))}>
 		</Button>

		 <TouchableHighlight 
		 style={{borderRadius:5, backgroundColor:"#4285F4"}}
			 disabled= {(this.props.currentQuestion === this.props.questions.length - 1) ? true : false}
			 onPress={() => this.props.dispatch(changeQuestion(1))}>
			  <Icon style={{margin:5}} name="stepforward" size={31} color="white" />
		 </TouchableHighlight>
		
</View>
</View>
 )
 }
}
function mapStateToProps(state) {
return {
...state
};
}

export default connect(mapStateToProps)(Actionbar);
