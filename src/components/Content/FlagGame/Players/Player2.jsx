import React from 'react';
import classes from "./Players.module.css"


const Players = (props) => {

    let newScoreElement = React.createRef();

    let increaseScoreByOne = () => {
        props.increaseScoreForSecondPlayer()
    };
    let decreaseScoreByOne = () => {
        props.decreaseScoreForSecondPlayer()
    };
    debugger
    return (

        <div className={classes.players}>
            {props.name}
            <input type="text" ref={newScoreElement} value={props.player2StartScore}/>
            <button onClick={increaseScoreByOne}>Plus</button>
            <button onClick={decreaseScoreByOne}>Minus</button>
        </div>

    )


};

export default Players