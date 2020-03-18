import React from 'react';
import classes from "./Players.module.css"
import {
    decreaseScoreFirstPlayerActionCreator,
    increaseScoreFirstPlayerActionCreator
} from "../../../../Redux/gameReducer";




const Player1 = (props) => {

    let newScoreElement = React.createRef();

    let increaseScoreByOne = () => {
        props.dispatch(increaseScoreFirstPlayerActionCreator())
    };
    let decreaseScoreByOne = () => {
        props.dispatch(decreaseScoreFirstPlayerActionCreator())
    };

    return (


        <div className={classes.players}>


            <div className={classes.player1}>
                {props.name}
            </div>
            <div className={classes.round}>
                {props.player1RoundScore}
            </div>

            <div>

                <input type="text" ref={newScoreElement} value={props.player1StartScore} width="20px"/>
                <div>
                    <button onClick={increaseScoreByOne}>Plus</button>
                    <button onClick={decreaseScoreByOne}>Minus</button>
                </div>

            </div>

        </div>

    )


};

export default Player1