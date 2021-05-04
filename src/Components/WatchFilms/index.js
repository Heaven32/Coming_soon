import React from 'react';
import classes from './style.module.css'
import {connect} from "react-redux";
import People from "./People";
import {updateTextActionCreator} from "../../Redux/films-reducer";

const WatchFilmsFunction = (props) => {
    const peopleElements = props.people.map(item => <People name={item.name} key={item.id} height={item.height}/>)
    const handleSubmit = (e) => {
        props.changeText(e.target.value);
    }
    return (
        <form >
            <label>
                <select onChange={handleSubmit}>{peopleElements}</select>
                <input type="text" value={props.valueInput}/>
            </label>
        </form>
    )
}

let mapStateToProps = (state) => {
    return {
        people: state.filmsPage.filmsData,
        valueInput: state.filmsPage.newValueText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => {
            dispatch(updateTextActionCreator(text));
        }
    }
}

let WatchFilms = connect(mapStateToProps, mapDispatchToProps)(WatchFilmsFunction);

export default WatchFilms;