import React from 'react';
import classes from "./Players.module.css"


const Player1 = (props) => {

    let newScoreElement = React.createRef();

    let increaseScoreByOne = () => {
        props.increaseScoreForFirstPlayer()
    };
    let decreaseScoreByOne = () => {
        props.decreaseScoreForFirstPlayer()
    };
    debugger
    return (


        <div className={classes.players}>

            <div className={classes.round}>
               {props.player1RoundScore}
            </div>
            <div>
                {props.name}
            </div>


            <div>

                    <input type="text" ref={newScoreElement} value={props.player1StartScore}/>
                    <div>
                        <button onClick={increaseScoreByOne}>Plus</button>
                        <button onClick={decreaseScoreByOne}>Minus</button>
                    </div>

            </div>

        </div>

    )


};

export default Player1