import React from "react";
import classes from "./MyFriemds.module.css"
import FriendN from "./FriendN/FriendN";

const MyFriends = (props) => {
    let userComponents = props.myFriends.map((friend) => <FriendN name={friend.name} id={friend.id} path={friend.path}/>);
    return (
        <div className={classes.myFriends}>
            {userComponents}
        </div>
    )
};

export default MyFriends;
