import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import QuestionAnswer from './QuestionAnswer';

const Quiz = () => {
    return (
        <>
            <Header as={Segment} inverted size="huge" image='/quiz2.png' content='Quiz Page' />
            <QuestionAnswer></QuestionAnswer>
            <QuestionAnswer></QuestionAnswer>
            <QuestionAnswer></QuestionAnswer>
        </>
    )
}

export default Quiz;