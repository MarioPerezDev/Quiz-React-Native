import React from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
import {changeQuestion, submit, reset, initQuestions, questionAnswer, directQuestion} from './redux/actions'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from './Button';
import Questiontext from './Questiontext';
import Icon2 from 'react-native-vector-icons/Ionicons';






export class Content extends React.Component {
	constructor(props){
	super(props);
	this.state = {text: ''};
}
 render(){
 	
 return (
<View style={{flex:9,flexDirection:"column", justifyContent:'flex-start',alignItems: 'center', backgroundColor:"#EBEAED"}}>
	 <Image
  		style={{width: 250, height: 250, marginTop:10}}
        source={{uri: this.props.img1}}
     />
     <Questiontext 
	dispatch={this.props.dispatch}
	question={this.props.question}
	currentQuestion={this.props.currentQuestion}/>
	
	<Text style={{fontSize:30, textAlign:"center"}}>Pregunta {this.props.currentQuestion +1}</Text>
	<Text style={{fontSize:30, textAlign:"center"}}>{this.props.question.question}:</Text>
	<View style={{flex:1,flexDirection: 'row', justifyContent:'center', maxHeight:14}}>
		<Text style={{fontSize:8}}>Creada por:{this.props.author}</Text>
		<Image
	  		style={{width: 10, height: 10, borderRadius: 50}}
	        source={{uri: this.props.img2}}
	     />
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

export default connect(mapStateToProps)(Content);