import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import Answer from "./Answer/Answer";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div>
                <Message message='Вчора пішов я в ліс по гриби,
Та ніц не знайшов серед зими,
Поки шукав я так заблукав
Чую як мій живіт заспівав
 Довго не думав, сів на пеньок,
Дістав із кишені смачний пірожок
Завтра до лісу знов по гриби,
Тільки візьму вже два пироги'/>
            </div>
            <div>
                <Answer message='Круто!!!!!!!'/>
            </div>
        </div>

    )
};

export default Dialogs
