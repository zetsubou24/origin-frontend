import React from 'react';
import { Header } from 'semantic-ui-react';
import Question from './Question'
const testData = {
    question: "Why are you?",
    answers: [
        "I am fine",
        "Sorry",
        "Thank You",
        "Welcome"
    ]
}
const QuestionAnswer = () => {
    return (
        <>
            <Question data={testData}></Question>
        </>
    )
}

export default QuestionAnswer;