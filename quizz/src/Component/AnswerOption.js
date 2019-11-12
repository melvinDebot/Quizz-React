import React from 'react';

function AnswerOption(props){
    return (
        <li className="answerOption">
            <input 
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerType ===  props.anwer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnwerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>{ props.answerContent }</label>
        </li>
    )
}

AnswerOption.propType = {
    answerType : React.PropType,
    answer : React.PropType,
    answerContent : React.PropType,
    onAnwerSelected : React.PropType,
}