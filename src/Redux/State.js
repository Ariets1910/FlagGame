import Natalia from "../images/Natalia.jpg"
import Michael from "../images/profileimg.jpg"
import Igor from "../images/Igor.jpg"
import Andriy from "../images/Andriy.jpg"
import Genias from "../images/Genyas.jpg"
import Roma from "../images/Roma.jpg"
import Sveta from "../images/sveta.jpg"
import {rerenderEntireTree} from "../render";
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
import fiji from "../images/flags/Fiji.svg.png";
import hungary from "../images/flags/Hungary.svg.png";
import wales from "../images/flags/Wales.svg.png";
import saba from "../images/flags/Saba.svg.png";
import rwanda from "../images/flags/Rwanda.svg.png";
import vanuatu from "../images/flags/Vanuatu.svg.png";
import pakistan from "../images/flags/Pakistan.svg.png";
import peru from "../images/flags/Peru.svg.png";
import niger from "../images/flags/Niger.svg.png";
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
import uganda from "../images/flags/Uganda.svg.png";
import irland from "../images/flags/Ireland.svg.png";


let state = {
    player1RoundScore: 0,
    player2RoundScore: 0,
    player1StartScore: 0,
    player2StartScore: 0,
    dialogs: {
        users: [
            {id: 1, path: Natalia, name: "Natalia"},
            {id: 2, path: Genias, name: "Natalia"},
            {id: 3, path: Igor, name: "Igor"},
            {id: 4, path: Andriy, name: "Andriy"},
            {id: 5, path: Michael, name: "Michael"},
            {id: 6, path: Roma, name: "Roma"},
            {id: 7, path: Sveta, name: "Sveta"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hi, hello"},
            {id: 3, message: "How is your day?"},
            {id: 4, message: "Fine, for sure"},
            {id: 5, message: "Nice to hear that!!!"},
            {id: 6, message: "I love react!!"},
        ],
        messageFieldStartValue: "Add some message",
        addNewMessage(dialogsMessage) {
            let newDialogsMessage = {
                id: state.dialogs.messages.length + 1,
                message: dialogsMessage,

            };
            state.dialogs.messages.push(newDialogsMessage);
            rerenderEntireTree(state);
        },
        updateMessage(newMessage) {
            state.dialogs.messageFieldStartValue = newMessage;
            rerenderEntireTree(state);
        },

    },
    content: {
        game: {
            statement: "Яка це країна?",

            countries: [usa, russia, ukraine, england, germany, france, spain, italy,
                china, southkorea, northkorea, portugal, finland, denmark, norway, sweden, switzerland,
                iceland, egypt, moldova, tunisia, algeria, chile, southafrica, yemen, marocco, brazil, romania,
                mongolia, angola, belorus, cuba, vatican, greece, iran, libia, kazakhstan, ethiopia, greenland,
                madagascar, sudan, nepal, butan, syria, croatia, canada, palau, japan, mali,
                argentyna, niue, jamajka, newcaledonia, bolivia, uganda, fiji, hungary, wales, saba, rwanda,
                vanuatu, pakistan, peru, niger, irland, indonesia, australia, azerbajdzan, albania, belgium, benin,
                venezuela, estonia, zimbabwe, india, myanmar, luxembourg, singapur],
            list: ["США", "Росія", "Україна", "Англія", "Німеччина", "Франція", "Іспанія", "Італія",
                "Китай", "Південна Корея", "Північна Корея", "Португалія", "Фінляндія", "Данія", "Норвегія", "Швеція", "Швейцарія",
                "Ісландія", "Єгипет", "Молдова", "Туніс", "Алжир", "Чилі", "ПАР", "Ємен", "Мароко", "Бразилія", "Румунія",
                "Монголія", "Ангола", "Білорусь", "Куба", "Ватикан", "Греція", "Іран", "Лівія", "Казахстан", "Ефіопія", "Гренландія",
                "Мадагаскар", "Судан", "Непал", "Бутан", "Сирія", "Хорватія", "Канада", "Палау", "Японія", "Малі", "Аргетина",
                "Ніуе", "Ямайка", "Нова Каледонія", "Болівія", "Уганда", "Фіджі", "Угорщина", "Уельс", "Саба", "Руанда", "Вануату",
                "Пакистан", "Перу", "Нігер", "Ірландія", "Індонезія", "Австралія", "Азербайжан", "Албанія", "Бельгія", "Бенін", "Венесуела"
                , "Естонія", "Зімбабве", "Індія", "Мьянма", "Люксембург", "Сингапур"],
            functions: {

                changeFlag: () => {
                    rerenderEntireTree(state);
                },

            },
            players: [
                {id: 1, name: "Player 1", startScore: 0},
                {id: 2, name: "Player 2", startScore: 0},

            ],

        },
        posts: [
            {id: 1, message: "Hello! This is my second project!!!", likeCount: "10"},
            {id: 2, message: "It is great!!!", likeCount: "-1"},
            {id: 3, message: "Thank you! Enjoy!", likeCount: "20"},
            {id: 4, message: "With pleasure", likeCount: "100"},
        ],
        postFieldStartValue: "Add some text",
        addPost(postMessage) {
            debugger
            let newPost = {
                id: state.content.posts.length + 1,
                message: postMessage,
                likeCount: 0
            };
            state.content.posts.push(newPost);
            rerenderEntireTree(state);
        },
        updateText(newText) {
            state.content.postFieldStartValue = newText;
            rerenderEntireTree(state);
        },
    },
    myFriends: [
        {id: 1, path: Natalia, name: "Natalia"},
        {id: 2, path: Genias, name: "Genias"},
        {id: 3, path: Igor, name: "Igor"},
        {id: 4, path: Andriy, name: "Andriy"},
        {id: 5, path: Michael, name: "Michael"},
        {id: 6, path: Roma, name: "Roma"},
        {id: 7, path: Sveta, name: "Sveta"},
    ],

};

window.state = state;


// export let changeFlag = () => {
// //     rerenderEntireTree(state);
// // };



export let increaseScoreForFirstPlayer = () => {
    let alertMessage1 = "Виграв перший гравець!!"
    state.player1StartScore++;
    rerenderEntireTree(state);
    if (state.player1StartScore === 10) {
        state.player1RoundScore++
        state.player1StartScore = 0
        state.player2StartScore = 0
       alert (alertMessage1)

        rerenderEntireTree(state);
    }


};


export let increaseScoreForSecondPlayer = () => {
    state.player2StartScore++;
    rerenderEntireTree(state);
    let alertMessage1 = "Виграв другий гравець!!";
    if (state.player2StartScore === 10) {
        state.player2RoundScore++
        state.player1StartScore = 0
        state.player2StartScore = 0
        alert (alertMessage1)

        rerenderEntireTree(state);
    }

};

export let decreaseScoreForFirstPlayer = () => {
    state.player1StartScore--;
    rerenderEntireTree(state);
};


export let decreaseScoreForSecondPlayer = () => {
    state.player2StartScore--;
    rerenderEntireTree(state);

};



export default state

