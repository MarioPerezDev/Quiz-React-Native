import { QUESTION_ANSWER, CHANGE_QUESTION,SUBMIT, INIT_QUESTIONS, RESET, DIRECT_QUESTION } from './actions'
import { combineReducers } from 'redux';
	
function score(state = 0, action = {}) {
switch(action.type) {
	case SUBMIT:
	let tempScore = 0;
	action.payload.questions.map((question,i) => {
if(question.answer === question.userAnswer){
	tempScore ++;
}})
	state = tempScore
	return state
	case RESET:
	return 0
default:
return state;
}
}
function finished(state = false, action = {}) {
switch(action.type) {
	case SUBMIT:
	return true
	case RESET:
	return false
default:
return state;
}
}
function currentQuestion(state = 0, action = {}) {
switch(action.type) {
	case CHANGE_QUESTION:
	return state + action.payload.index
	case DIRECT_QUESTION:
	console.log("pues direct")
	return action.payload.index
	case RESET:
	return 0
default:
return state;
}
}
function questions(state = [], action = {}) {
switch(action.type) {
case QUESTION_ANSWER:
return state.map((question,i) => {
return { ...question,
userAnswer: action.payload.index === i ?
action.payload.answer : question.userAnswer
}
})
case RESET:
return []
case INIT_QUESTIONS:
return action.payload.questions
default:
return state;
}
}
const GlobalState = (combineReducers({
score,
finished,
currentQuestion,
questions,
}));


export default GlobalState;