import Natalia from "../images/Natalia.jpg";
import Genias from "../images/Genyas.jpg";
import Igor from "../images/Igor.jpg";
import Andriy from "../images/Andriy.jpg";
import Michael from "../images/profileimg.jpg";
import Roma from "../images/Roma.jpg";
import Sveta from "../images/sveta.jpg";

let initialState = [
    {id: 1, path: Natalia, name: "Natalia"},
    {id: 2, path: Genias, name: "Genias"},
    {id: 3, path: Igor, name: "Igor"},
    {id: 4, path: Andriy, name: "Andriy"},
    {id: 5, path: Michael, name: "Michael"},
    {id: 6, path: Roma, name: "Roma"},
    {id: 7, path: Sveta, name: "Sveta"},
];


export const myFriendsReducer = (state = initialState, action) => {
    return state;
};