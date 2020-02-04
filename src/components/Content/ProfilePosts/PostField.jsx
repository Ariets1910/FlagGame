import React from 'react';
import classes from "./PostField.module.css"
import PostN from "./PostN/PostN";
const PostField = () => {
    return (
        <div className={classes.postField}>
            <section>
                <article>
                    <h2>Тут будуть пости користувачів</h2>
                </article>
                <div>
                    <PostN likeCount="10" message="Hello! This is my second project!!!"/>
                    <PostN likeCount="20" message="It is great!!!"/>
                    <PostN likeCount="19" message="Thank you! Enjoy!"/>
                    <PostN likeCount="21" message="With pleasure"/>
                </div>
            </section>
        </div>
    )
};

export default PostField