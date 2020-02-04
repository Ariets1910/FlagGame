import React from "react";
import classes from "./Content.module.css"
import Game from "./FlagGame/Game";
import PostField from "./ProfilePosts/PostField";
const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <section>
                    <article>
                        <Game question="Яка це країна?"/>

                    </article>
                </section>
            </div>
                <div>
                    <section>
                        <PostField/>
                    </section>
                </div>
        </div>

    )
};

export default Content
