import React from 'react';

import state, {nextFlagActionCreator} from "../../../Redux/gameReducer";
import Game from "./Game";




const GameContainer = (props) => {


    let nextFlag = () => {
        props.dispatch(nextFlagActionCreator())
    };


    return (

    <Game/>


    )


};

export default GameContainer