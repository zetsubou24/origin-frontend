import React, { useState, useEffect } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import Word from "./Word"

const Lesson = () => {
    const [words, setWords] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/words")
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setWords(data)
            })
    }, [])
    return (
        <>
            <Header as={Segment} inverted size="huge" image="lesson2.png" content='Lesson Page'>
            </Header>
            <Word></Word>
            <Word></Word>
            <Word></Word>
            <Word></Word>
            <Word></Word>
            <br></br>
        </>
    )
}

export default Lesson;