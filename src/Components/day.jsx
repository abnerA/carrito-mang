import React from "react";
import style from "./Day.module.css";

const estilos = {
    active: 'white',
    inactive: 'rgb(90, 153, 221)'
}

function Day(props) {
    return(
        <>
            <h2 aria-label={`Día ${props.num}`} className={style.dayNum} 
            style={{ backgroundColor: props.num === props.currentDay && props.currentMonth === props.stateMonth  && props.currentYear === props.stateYear ? estilos.active : estilos.inactive }}>
                {props.num}
            </h2>
        </>
    );
}

export default Day;