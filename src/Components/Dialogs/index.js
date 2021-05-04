import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import classes from './style.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";


const DialogsFunction = (props) => {
    const dialogsElements = props.dialogs.map(element => <DialogItem name={element.name} key={element.id}
                                                                     id={element.id}
                                                                     avatar={element.avatar}/>);
    const messagesElements = props.message.map(element => <Message message={element.message} key={element.id}
                                                                   id={element.id}/>);

    const addMessage = () => {
        props.addMessage();
    };
    const changeText = (e) => {
        props.changeText(e.target.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.text}>
                <div className="">
                    <textarea onChange={changeText} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>

    );
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        message: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsFunction);

export default Dialogs;