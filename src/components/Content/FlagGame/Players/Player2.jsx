import React from 'react';
import classes from "./Players.module.css"
import {decreaseScoreSecondPlayerActionCreator, increaseScoreSecondPlayerActionCreator} from "../../../../Redux/gameReducer";



const Player2 = (props) => {

    let newScoreElement = React.createRef();

    let increaseScoreByOne = () => {
        props.dispatch(increaseScoreSecondPlayerActionCreator())
    };
    let decreaseScoreByOne = () => {
        props.dispatch(decreaseScoreSecondPlayerActionCreator())
    };

    return (

        <div className={classes.players}>

            <div className={classes.player2}>
                {props.name}
            </div>
            <div className={classes.round}>
                {props.player2RoundScore}
            </div>

            <div>
                <input type="text" ref={newScoreElement} value={props.player2StartScore}/>
                <div>
                    <button onClick={increaseScoreByOne}>Plus</button>
                    <button onClick={decreaseScoreByOne}>Minus</button>
                </div>

            </div>

        </div>

    )


};

export default Player2