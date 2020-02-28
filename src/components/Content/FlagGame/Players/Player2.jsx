import React from 'react';
import classes from "./Players.module.css"


const Player2 = (props) => {

    let newScoreElement = React.createRef();

    let increaseScoreByOne = () => {
        props.increaseScoreForSecondPlayer()
    };
    let decreaseScoreByOne = () => {
        props.decreaseScoreForSecondPlayer()
    };

    return (

        <div className={classes.players}>
            {props.name}

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