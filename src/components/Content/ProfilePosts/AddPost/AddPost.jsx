import React from "react";
import classes from "../AddPost/AddPost.module.css"

const AddPost = () => {
    return (
        <div className={classes.addPost}>
            <form className={classes.form}>
                <div className={classes.textarea}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={classes.addButton}>
                    <button>Додати пост</button>
                </div>
                <div className={classes.clearButton}>
                    <button type="reset">Очистити</button>
                </div>

            </form>
        </div>
    )
};

export default AddPost