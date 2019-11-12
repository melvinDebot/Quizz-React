import React from 'react';
import Question from './Questions';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quizz(props){
    function renderAnswerOption(key){
        return(
            <AnswerOption 
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.questionId}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        )
    }
    return(
        <div className="quiz">
            <QuestionCount counter={props.questionId}  total={props.questionTotal}/>
            <Question content={props.Question} />
            <ul className="answerOption">
                { props.AnswerOption.map(renderAnswerOption)}
            </ul>
        </div>
    )
}

Quizz.propType = {
    answer: React.PropTypes,
    answerOptions: React,
    counter: React.PropTypes,
    question: React.PropTypes,
    questionId: React.PropTypes,
    questionTotal: React.PropTypes,
    onAnswerSelected: React.PropTypes
}

export default QuizzUpp;