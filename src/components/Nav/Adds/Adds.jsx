import React from "react";
import classes from "./Adds.module.css"
import dollar from "../../../images/dollar-logo-png.jpg"

const Adds = () => {
    return (
        <div className={classes.adds}>
                <a href="">
                    <img src={dollar} alt=""/>
                    Тут <br/>
                    Может <br/>
                    Быть <br/>
                    Ваша <br/>
                    Реклама <br/></a>
        </div>

    )
};

export default Adds
