import usa from "../images/flags/usa.svg";
import russia from "../images/flags/russia.svg";
import ukraine from "../images/flags/Ukraine.svg.png";
import england from "../images/flags/england.svg.png";
import germany from "../images/flags/Germany.svg.webp";
import france from "../images/flags/france.svg.png";
import spain from "../images/flags/Spain.svg.png";
import italy from "../images/flags/Italy_flag.gif";
import china from "../images/flags/China.svg";
import southkorea from "../images/flags/SouthKorea.svg";
import northkorea from "../images/flags/North_Korea.svg.png";
import portugal from "../images/flags/Portugal.svg.png";
import finland from "../images/flags/Finland.svg.png";
import denmark from "../images/flags/Denmark.svg.png";
import norway from "../images/flags/Norway.svg.png";
import sweden from "../images/flags/Sweden.svg.png";
import switzerland from "../images/flags/Switzerland.svg";
import iceland from "../images/flags/Iceland.svg.png";
import egypt from "../images/flags/Egypt.svg.png";
import moldova from "../images/flags/Moldova.svg.png";
import tunisia from "../images/flags/Tunisia.svg.png";
import algeria from "../images/flags/Algeria.svg";
import chile from "../images/flags/Chile.svg.png";
import southafrica from "../images/flags/SouthAfrica.svg.png";
import yemen from "../images/flags/Yemen.svg.png";
import marocco from "../images/flags/Morocco.svg.png";
import brazil from "../images/flags/Brazil.svg.png";
import romania from "../images/flags/Romania.svg.png";
import mongolia from "../images/flags/Mongolia.svg.png";
import angola from "../images/flags/Angola.svg.png";
import belorus from "../images/flags/Belarus.svg.png";
import cuba from "../images/flags/Cuba.svg.png";
import vatican from "../images/flags/Vatican.svg.png";
import greece from "../images/flags/Greece.svg.png";
import iran from "../images/flags/Iran.svg.png";
import libia from "../images/flags/Libya.svg.png";
import kazakhstan from "../images/flags/Kazakhstan.svg.png";
import ethiopia from "../images/flags/Ethiopia.svg.png";
import greenland from "../images/flags/Greenland.svg.png";
import madagascar from "../images/flags/Madagascar.svg.png";
import sudan from "../images/flags/Sudan.svg.png";
import nepal from "../images/flags/Nepal.svg.png";
import butan from "../images/flags/Bhutan.svg.png";
import syria from "../images/flags/Syria.svg.png";
import croatia from "../images/flags/Croatia.svg.png";
import canada from "../images/flags/Canada.svg.webp";
import palau from "../images/flags/Palau.svg.png";
import japan from "../images/flags/Japan.svg.png";
import mali from "../images/flags/Mali.svg.png";
import argentyna from "../images/flags/Argentina.svg.png";
import niue from "../images/flags/Niue.svg.png";
import jamajka from "../images/flags/Jamaica.svg.png";
import newcaledonia from "../images/flags/newkaledonia.svg.png";
import bolivia from "../images/flags/Bolivia.svg.png";
import uganda from "../images/flags/Uganda.svg.png";
import fiji from "../images/flags/Fiji.svg.png";
import hungary from "../images/flags/Hungary.svg.png";
import wales from "../images/flags/Wales.svg.png";
import saba from "../images/flags/Saba.svg.png";
import rwanda from "../images/flags/Rwanda.svg.png";
import vanuatu from "../images/flags/Vanuatu.svg.png";
import pakistan from "../images/flags/Pakistan.svg.png";
import peru from "../images/flags/Peru.svg.png";
import niger from "../images/flags/Niger.svg.png";
import irland from "../images/flags/Ireland.svg.png";
import indonesia from "../images/flags/Indonesia.svg";
import australia from "../images/flags/Australia.svg.png";
import azerbajdzan from "../images/flags/Azerbaijan.svg.png";
import albania from "../images/flags/Albania.svg.png";
import belgium from "../images/flags/Belgium.svg.png";
import benin from "../images/flags/Benin.svg.png";
import venezuela from "../images/flags/Venezuela.svg.png";
import estonia from "../images/flags/Estonia.svg.png";
import zimbabwe from "../images/flags/Zimbabwe.svg.png";
import india from "../images/flags/India.svg.png";
import myanmar from "../images/flags/Myanmar.png";
import luxembourg from "../images/flags/Luxembourg.svg.png";
import singapur from "../images/flags/Singapore.svg.png";
import armenia from "../images/flags/Armenia.svg.png";
import georgia from "../images/flags/Georgia.svg.png";
import cyprus from "../images/flags/Cyprus.svg.png";
import qatar from "../images/flags/Qatar.svg.png";
import north_macedonia from "../images/flags/North_Macedonia.png";
import turkmenistan from "../images/flags/Turkmenistan.svg.png";
import montenegro from "../images/flags/Montenegro.svg.png";
import panama from "../images/flags/Panama.svg.png";
import uae from "../images/flags/United_Arab_Emirates.svg.png";
import laos from "../images/flags/Laos.svg.png";

const INCREASE_SCORE_FIRST_PLAYER = "increaseScoreForFirstPlayer";
const DECREASE_SCORE_FIRST_PLAYER = "decreaseScoreForFirstPlayer";
const INCREASE_SCORE_SECOND_PLAYER = "increaseScoreForSecondPlayer";
const DECREASE_SCORE_SECOND_PLAYER = "decreaseScoreForSecondPlayer";
const NEXT_FLAG = "changeFlag";

let initialState = {

        statement: "Яка це країна?",
        player1RoundScore: 0,
        player2RoundScore: 0,
        player1StartScore: 0,
        player2StartScore: 0,
        countries: [usa, russia, ukraine, england, germany, france, spain, italy,
            china, southkorea, northkorea, portugal, finland, denmark, norway, sweden, switzerland,
            iceland, egypt, moldova, tunisia, algeria, chile, southafrica, yemen, marocco, brazil, romania,
            mongolia, angola, belorus, cuba, vatican, greece, iran, libia, kazakhstan, ethiopia, greenland,
            madagascar, sudan, nepal, butan, syria, croatia, canada, palau, japan, mali,
            argentyna, niue, jamajka, newcaledonia, bolivia, uganda, fiji, hungary, wales, saba, rwanda,
            vanuatu, pakistan, peru, niger, irland, indonesia, australia, azerbajdzan, albania, belgium, benin,
            venezuela, estonia, zimbabwe, india, myanmar, luxembourg, singapur, armenia, georgia,
            cyprus, qatar, north_macedonia, turkmenistan, montenegro, panama, uae, laos],
        list: ["США", "Росія", "Україна", "Англія", "Німеччина", "Франція", "Іспанія", "Італія",
            "Китай", "Південна Корея", "Північна Корея", "Португалія", "Фінляндія", "Данія", "Норвегія", "Швеція", "Швейцарія",
            "Ісландія", "Єгипет", "Молдова", "Туніс", "Алжир", "Чилі", "ПАР", "Ємен", "Мароко", "Бразилія", "Румунія",
            "Монголія", "Ангола", "Білорусь", "Куба", "Ватикан", "Греція", "Іран", "Лівія", "Казахстан", "Ефіопія", "Гренландія",
            "Мадагаскар", "Судан", "Непал", "Бутан", "Сирія", "Хорватія", "Канада", "Палау", "Японія", "Малі", "Аргетина",
            "Ніуе", "Ямайка", "Нова Каледонія", "Болівія", "Уганда", "Фіджі", "Угорщина", "Уельс", "Саба", "Руанда", "Вануату",
            "Пакистан", "Перу", "Нігер", "Ірландія", "Індонезія", "Австралія", "Азербайжан", "Албанія", "Бельгія", "Бенін", "Венесуела"
            , "Естонія", "Зімбабве", "Індія", "Мьянма", "Люксембург", "Сингапур", "Арменія", "Грузія", "Кіпр",
            "Катар", "Північна Македонія", "Туркменністан", "Чорногорія", "Панама", "ОАЕ", "Лаос"],

        players: [
            {id: 1, name: "Player 1", startScore: 0},
            {id: 2, name: "Player 2", startScore: 0},
        ],


};



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


const gameReducer = (state = initialState, action) => {
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