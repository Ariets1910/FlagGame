import React from 'react';
import classes from "./Game.module.css"
import arrow from "../../../images/arrow-down-4-48.png"

import Player1 from "./Players/Player1";
import Player2 from "./Players/Player2";
import state, {nextFlagActionCreator} from "../../../Redux/gameReducer";
import Countdown from "react-countdown-now";



const Game = (props) => {

    let i = (Math.floor(Math.random() * props.game.list.length));

    let nextFlag = () => {
        props.dispatch(nextFlagActionCreator())
    };


    let Completionist = () => <span>Гру закінчено, ви програли!!!</span>;
    const renderer = ({seconds, completed}) => {
        if (completed) {
            return (
                <div>
                    <Completionist/>
                </div>

            )

        } else {
            return <span>{seconds}</span>;
        }
    };


    return (


        <div className={classes.game}>

            <div className={classes.players}>

                <Player1 name="Player 1"
                         dispatch={props.dispatch}
                         player1StartScore={props.player1StartScore}
                         player1RoundScore={props.player1RoundScore}
                />
                <div>

                </div>

                <Player2 name="Player 2"
                         dispatch={props.dispatch}
                         player2StartScore={props.player2StartScore}
                         player2RoundScore={props.player2RoundScore}
                />
            </div>

            {/*<div className={classes.players}>*/}
            {/*   */}
            {/*</div>*/}
            <div className={classes.flagField}>
                <h1 className={classes.countDown}>
                    <Countdown
                        date={Date.now() + 60000}
                        intervalDelay={0}
                        precision={3}

                        renderer={renderer}

                    />

                </h1>
                <h1>
                    {props.game.statement}
                </h1>
                <h3>
                    Клікни по прапору для наступного челенджу!!!
                </h3>
                <button className={classes.button} onClick={nextFlag}>
                    <img className={classes.img} src={props.game.countries[i]} alt="flag"/>
                </button>
                <div className={classes.textBelow}>
                    Наведи сюди мишку
                    <div>
                        <img className={classes.arrow} src={arrow} alt="pidkazka"/>
                    </div>
                    <h2>{props.game.list[i]}</h2>

                </div>
            </div>


        </div>

    )


};

export default Game