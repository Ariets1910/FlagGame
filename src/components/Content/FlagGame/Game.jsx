import React from 'react';
import classes from "./Game.module.css"
import ukraine from "../../../images/flags/Uganda.svg.png"
import usa from "../../../images/flags/usa.svg"
import russia from "../../../images/flags/russia.svg"
import england from "../../../images/flags/england.svg.png"
import germany from "../../../images/flags/Germany.svg.webp"
import france from "../../../images/flags/france.svg.png"
import spain from "../../../images/flags/Spain.svg.png"
import italy from "../../../images/flags/Italy_flag.gif"
import china from "../../../images/flags/China.svg"
import southkorea from "../../../images/flags/SouthKorea.svg"
import northkorea from "../../../images/flags/North_Korea.svg.png"
import portugal from "../../../images/flags/Portugal.svg.png"
import finland from "../../../images/flags/Finland.svg.png"
import denmark from "../../../images/flags/Denmark.svg.png"
import norway from "../../../images/flags/Norway.svg.png"
import sweden from "../../../images/flags/Sweden.svg.png"
import switzerland from "../../../images/flags/Switzerland.svg"
import iceland from "../../../images/flags/Iceland.svg.png"
import egypt from "../../../images/flags/Egypt.svg.png"
import moldova from "../../../images/flags/Moldova.svg.png"
import tunisia from "../../../images/flags/Tunisia.svg.png"
import algeria from "../../../images/flags/Algeria.svg"
import chile from "../../../images/flags/Chile.svg.png"
import southafrica from "../../../images/flags/SouthAfrica.svg.png"
import yemen from "../../../images/flags/Yemen.svg.png"
import marocco from "../../../images/flags/Morocco.svg.png"
import brazil from "../../../images/flags/Brazil.svg.png"
import romania from "../../../images/flags/Romania.svg.png"
import mongolia from "../../../images/flags/Mongolia.svg.png"
import belorus from "../../../images/flags/Belarus.svg.png"
import cuba from "../../../images/flags/Cuba.svg.png"
import vatican from "../../../images/flags/Vatican.svg.png"
import greece from "../../../images/flags/Greece.svg.png"
import iran from "../../../images/flags/Iran.svg.png"
import libia from "../../../images/flags/Libya.svg.png"
import angola from "../../../images/flags/Angola.svg.png"
import kazakhstan from "../../../images/flags/Kazakhstan.svg.png"
import ethiopia from "../../../images/flags/Ethiopia.svg.png"
import greenland from "../../../images/flags/Greenland.svg.png"
import madagascar from "../../../images/flags/Madagascar.svg.png"
import sudan from "../../../images/flags/Sudan.svg.png"
import nepal from "../../../images/flags/Nepal.svg.png"
import butan from "../../../images/flags/Bhutan.svg.png"
import syria from "../../../images/flags/Syria.svg.png"
import croatia from "../../../images/flags/Croatia.svg.png"
import canada from "../../../images/flags/Canada.svg.webp"
import palau from "../../../images/flags/Palau.svg.png"
import japan from "../../../images/flags/Japan.svg.png"
import mali from "../../../images/flags/Mali.svg.png"
import argentyna from "../../../images/flags/Argentina.svg.png"
import niue from "../../../images/flags/Niue.svg.png"
import jamajka from "../../../images/flags/Jamaica.svg.png"
import newcaledonia from "../../../images/flags/newkaledonia.svg.png"
import bolivia from "../../../images/flags/Bolivia.svg.png"
import uganda from "../../../images/flags/Uganda.svg.png"
import fiji from "../../../images/flags/Fiji.svg.png"
import hungary from "../../../images/flags/Hungary.svg.png"
import wales from "../../../images/flags/Wales.svg.png"
import saba from "../../../images/flags/Saba.svg.png"
import rwanda from "../../../images/flags/Rwanda.svg.png"
import vanuatu from "../../../images/flags/Vanuatu.svg.png"
import pakistan from "../../../images/flags/Pakistan.svg.png"
import peru from "../../../images/flags/Peru.svg.png"
import niger from "../../../images/flags/Niger.svg.png"
import irland from "../../../images/flags/Iceland.svg.png"
import indonesia from "../../../images/flags/Indonesia.svg"
import arrow from "../../../images/arrow-down-4-48.png"

let countries = [usa, russia, ukraine, england, germany, france, spain, italy,
    china, southkorea, northkorea, portugal, finland, denmark, norway, sweden, switzerland,
    iceland, egypt, moldova, tunisia, algeria, chile, southafrica, yemen, marocco, brazil, romania,
    mongolia, angola, belorus, cuba, vatican, greece, iran, libia, kazakhstan, ethiopia, greenland,
    madagascar, sudan, nepal, butan, syria, croatia, canada, palau, japan, mali,
    argentyna, niue, jamajka, newcaledonia, bolivia, uganda, fiji, hungary, wales, saba, rwanda,
    vanuatu, pakistan, peru, niger, irland, indonesia];

let list = ["США", "Росія", "Україна", "Англія", "Німеччина", "Франція", "Іспанія", "Італія",
    "Китай", "Південна Корея", "Північна Корея", "Португалія", "Фінляндія", "Данія", "Норвегія", "Швеція", "Швейцарія",
    "Ісландія", "Єгипет", "Молдова", "Туніс", "Алжир", "Чилі", "ПАР", "Ємен", "Мароко", "Бразилія", "Румунія",
    "Монголія", "Ангола", "Білорусь", "Куба", "Ватикан", "Греція", "Іран", "Лівія", "Казахстан", "Ефіопія", "Гренландія",
    "Мадагаскар", "Судан", "Непал", "Бутан", "Сирія", "Хорватія", "Канада", "Палау", "Японія", "Малі", "Аргетина",
    "Ніуе", "Ямайка", "Нова Каледонія", "Болівія", "Уганда", "Фіджі", "Угорщина", "Уельс", "Саба", "Руанда", "Вануату",
    "Пакистан", "Перу", "Нігер", "Ірландія", "Індонезія"];

let i = (Math.floor(Math.random() * list.length));
// alert (list.indexOf("Ефіопія"));
// alert (countries.length);
const Game = (props) => {
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
                    <img className={classes.img} src={countries[i]} alt="flag"/>
                </div>
                <div className={classes.textBelow}>
                    Наведи сюди мишку
                    <div>
                        <img src={arrow} alt="pidkazka"/>
                    </div>


                    <h2>{list[i]}</h2>

                </div>
            </div>
            {/*<div className={classes.game.button}>*/}
            {/*    <button>США</button>*/}
            {/*    <button>Росія</button>*/}
            {/*    <button>Україна</button>*/}
            {/*    <button>Мальта</button>*/}
            {/*</div>*/}

        </div>

    )


};

export default Game