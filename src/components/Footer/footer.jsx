import React from "react";
import classes from "./footer.module.css"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.authorInfo}>
                <div>
                    <a href="https://www.facebook.com/Ariets1910">Автор: Сюсько М.В. (Ariets1910)</a>
                </div>
                <div>
                    <a href="">Телефон: +380987206601</a>
                </div>
                <div>
                    <a href="">Електронна пошта: Ariets1910@gmail.com</a>
                </div>

            </div>

        </div>

    )
};

export default Footer
