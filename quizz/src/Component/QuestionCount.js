import React from 'react';

function QuestionCount(props){
    return(
        <div className="questioncount">
            Question <span>{props.counter}</span> of <span>{ props.total }</span>
        </div>
    );
}
QuestionCount.propType = {
    counter: React.PropType,
    total: React.PropType
}

export default QuestionCount;