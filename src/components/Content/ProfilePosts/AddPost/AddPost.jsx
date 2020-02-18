import React from "react";
import classes from "../AddPost/AddPost.module.css"

const AddPost = () => {
    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={classes.addPost}>
            <form className={classes.form}>
                <div className={classes.textarea}>
                    <textarea name="" ref={newPostElement} cols="30" rows="10"></textarea>
                </div>
                <div className={classes.addButton}>
                    <button id="addPost" onClick={ addPost }>Додати пост</button>
                </div>
                <div className={classes.clearButton}>
                    <button type="reset">Очистити</button>
                </div>

            </form>
        </div>
    )
};

export default AddPost