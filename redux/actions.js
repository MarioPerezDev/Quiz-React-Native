export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const DIRECT_QUESTION = 'DIRECT_QUESTION';
export const RESET = 'RESET';



export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function directQuestion(index) {
	return { type: DIRECT_QUESTION, payload: { index } };
}

//Cambia la pregunta que se muestra
export function changeQuestion(index){
	return { type: CHANGE_QUESTION, payload : {index}  };
}
/*
Finaliza el juego y evalúa las respuestas comparando
userAnswer con answer y mostrando la puntuación obtenida. También este cambia
finished a true.
*/
export function submit(questions){
	return { type: SUBMIT, payload:{questions} }
}
/*
Sobreescribe las preguntas del estado por
las que se indica en el argumento questions. Esta acción se utilizará al pedir las
preguntas del servidor
*/
export function initQuestions(questions){
	return { type: INIT_QUESTIONS, payload:{questions} }
}

export function reset(){
	return { type: RESET}
}
