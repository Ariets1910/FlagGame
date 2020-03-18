const INCREASE_SCORE_FIRST_PLAYER = "increaseScoreForFirstPlayer";
const DECREASE_SCORE_FIRST_PLAYER = "decreaseScoreForFirstPlayer";
const INCREASE_SCORE_SECOND_PLAYER = "increaseScoreForSecondPlayer";
const DECREASE_SCORE_SECOND_PLAYER = "decreaseScoreForSecondPlayer";
const NEXT_FLAG = "changeFlag";
export const increaseScoreFirstPlayerActionCreator = () => {
    return {type: INCREASE_SCORE_FIRST_PLAYER }
};

export const decreaseScoreFirstPlayerActionCreator = () => {
    return {type: DECREASE_SCORE_FIRST_PLAYER}
};

export const increaseScoreSecondPlayerActionCreator = () => {
    return {type: INCREASE_SCORE_SECOND_PLAYER}
};

export const decreaseScoreSecondPlayerActionCreator = () => {
    return {type: DECREASE_SCORE_SECOND_PLAYER}
};




export const nextFlagActionCreator = () => {
    return {type: NEXT_FLAG }
};


const gameReducer = (state, action) => {
    if (action.type === NEXT_FLAG) {
        return state
    }
    else if (action.type === INCREASE_SCORE_FIRST_PLAYER) {
        let alertMessage1 = "Виграв перший гравець!!";
        state.player1StartScore++;
        if (state.player1StartScore === 10) {
            state.player1RoundScore++;
            state.player1StartScore = 0;
            state.player2StartScore = 0;
            alert(alertMessage1);
        }
    }
    else if (action.type === INCREASE_SCORE_SECOND_PLAYER) {
        state.player2StartScore++;
        let alertMessage1 = "Виграв другий гравець!!";
        if (state.player2StartScore === 10) {
            state.player2RoundScore++;
            state.player1StartScore = 0;
            state.player2StartScore = 0;
            alert(alertMessage1);
        }
    }
    else if (action.type === DECREASE_SCORE_FIRST_PLAYER) {
        state.player1StartScore--;
    }
    else if (action.type === DECREASE_SCORE_SECOND_PLAYER) {
        state.player2StartScore--;
    }
    return state;
};

export default gameReducer;