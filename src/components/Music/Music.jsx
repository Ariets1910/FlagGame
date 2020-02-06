import React from "react";
import classes from "./Music.module.css"


const Music = (props) => {
    return (
        <div className={classes.music}>
            <div>
                <iframe src='https://www.youtube.com/embed/0qanF-91aJo'
                        frameBorder='1'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='Music'

                />
            </div>

        </div>

    )
};
// src='https://www.youtube.com/embed/0qanF-91aJo'
export default Music
