import React, { useEffect, useState } from 'react';
import { Header, Button } from 'semantic-ui-react';
import Question from './Question'

const QuestionAnswer = (props) => {
    
    return (
        <>
            
            <Question index={props.index} id={props.id} name={props.name} meaning={props.meaning} answers={props.answers} handleSelected={props.handleSelected}></Question>
            
        </>
    )
}

export default QuestionAnswer;