import React from 'react';
import { View , Text, Image, TextInput} from 'react-native';
import { connect } from 'react-redux';
import {questionAnswer, changeQuestion, submit, reset, initQuestions} from './redux/actions'
import Button from './Button';
import Actionbar from './Actionbar';
import Content from './Content';
import Icon2 from 'react-native-vector-icons/Ionicons';



function init() {
this.props.dispatch(reset());
 fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=980db25f20d79702553d')
    .then((response) => response.json())
    .then((recurso) => {
      return this.props.dispatch(initQuestions(recurso));
    })
    .catch((error) => {
      console.error(error);
    });
 }

class GameScreen extends React.Component {
constructor(props){
	super(props);
	
	init= init.bind(this);
}
 
 componentDidMount(){
init()
}
render(){
	if(this.props.questions.length===0){
		return(
			<View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
				<Text>Cargando...</Text>
 			</View>
		)
	}
	var currentQuestion = this.props.questions[this.props.currentQuestion];
	var img1 = "https://icon-library.net/images/not-found-icon/not-found-icon-28.jpg"
	var img2= "https://icon-library.net/images/not-found-icon/not-found-icon-28.jpg"
	var author = "Anonimo"

if(currentQuestion){
	if(currentQuestion.attachment != null) {
		img1= currentQuestion.attachment.url
	}
	
	if (currentQuestion.author.photo !=null){
		img2=currentQuestion.author.photo.url
	}

	if(currentQuestion.author.username !=null){
		author = currentQuestion.author.username
	}
}
if(this.props.finished){
	return(
	<View style={{flex:1, justifyContent:'center',alignItems: 'center'}}>
		<Text> Juego completado, puntuación obtenida:</Text>
		<Text> {this.props.score}</Text>
		<Button
 			text="Resetear"
 			onClick={() => {this.props.dispatch(reset());
				init()}}>
 		</Button>
	</View>
	)
}
else{  
return (
	<View  style={{flex:1, justifyContent:'center'}}>
	<Content
	img1={img1}
	img2={img2}
	author={author}
	question={currentQuestion}
	dispatch={this.props.dispatch}
	/>
	<Actionbar
	navigation={this.props.navigation} 
	disabled={this.props.currentQuestion === 0 ? true : false}
	init={init}/>
	</View>
);
}
}
}

function mapStateToProps(state) {
return {
...state
};
}

export default connect(mapStateToProps)(GameScreen);