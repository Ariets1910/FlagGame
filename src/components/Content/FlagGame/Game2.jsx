import React from "react";
import classes from "./Game2.module.css";
import arrow from "../../../images/arrow-down-4-48.png";


let ua = ["Україна"];
let en = ["Ukraine"];
let path = ["../../../images/flags/Ukraine.svg.png"];

function addCountry(UA, EN) {
    ua.push(UA);
    en.push(EN);
    path.push(`../../../images/flags/${EN}.svg.png`)
}

addCountry("Росія", "Russia");

let i = (Math.floor(Math.random() * ua.length));

let path2 = path[i];

console.log(path[i]);


const Game2 = (props) => {
    return (
        <div className={classes.game}>
            <div>
                <h1>Яка це країна?</h1>
                <div>
                    <h3>
                        Онови сторінку для наступного челенджу!!!
                    </h3>
                </div>

            </div>
            <div>
                <div>
                    <img src={require(path2)}/>
                </div>
                <div className={classes.textBelow}>
                    Наведи сюди мишку
                    <div>
                        <img src={arrow} alt="pidkazka"/>
                    </div>
                    <h2>{ua[i]}</h2>

                </div>
            </div>


        </div>

    )


};
export default Game2