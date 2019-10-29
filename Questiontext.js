import React from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
import {changeQuestion, submit, reset, initQuestions, questionAnswer} from './redux/actions'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from './Button';
import Icon2 from 'react-native-vector-icons/Ionicons';






export default class Questiontext extends React.Component {
	 render(){
 return (
<View>
		<TextInput
          style={{borderWidth: 0.5, borderColor:"black", height: 40, width:200, fontSize:18, margin:5}}
          placeholder="Responda aquí"
          value={this.props.question.userAnswer || "" }
          onChangeText={text => {this.props.dispatch(questionAnswer(this.props.currentQuestion , text));}}/>
	</View>
 )
 }
}
