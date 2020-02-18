import Natalia from "../images/Natalia.jpg"
import Michael from "../images/profileimg.jpg"
import Igor from "../images/Igor.jpg"
import Andriy from "../images/Andriy.jpg"
import Genias from "../images/Genyas.jpg"
import Roma from "../images/Roma.jpg"
import Sveta from "../images/sveta.jpg"
let state = {
    users: [
        {id: 1, path: Natalia, name: "Natalia"},
        {id: 2, path: Genias, name: "Genias"},
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
    posts: [
        {id: 1, message: "Hello! This is my second project!!!", likeCount: "10"},
        {id: 2, message: "It is great!!!", likeCount: "-1"},
        {id: 3, message: "Thank you! Enjoy!", likeCount: "20"},
        {id: 4, message: "With pleasure", likeCount: "100"},
    ],
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

// let addPost = (postMessage) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likeCount: 0
//     }
// }


export default state

