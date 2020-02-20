import React from "react";
import classes from "../AddPost/AddPost.module.css"


const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };
    let updateText = () => {
        let text = newPostElement.current.value;
        props.uptateText(text)

    };

    return (
        <div className={classes.addPost}>
            <form className={classes.form}>
                <div className={classes.textarea}>
                    <textarea name="" ref={newPostElement} cols="30" rows="10" value={props.postFieldStartValue} onChange={updateText}></textarea>
                </div>
                <div className={classes.addButton}>
                    <button id="addPost" onClick={addPost}>Додати пост</button>
                </div>
                <div className={classes.clearButton}>
                    <button type="reset">Очистити</button>
                </div>

            </form>
        </div>
    )
};
//
export default AddPost

