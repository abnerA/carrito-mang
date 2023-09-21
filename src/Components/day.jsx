import React from "react";
import style from "./Day.module.css";

const estilos = {
    active: 'white',
    inactive: 'rgb(90, 153, 221)'
}

function Day(props) {
    // console.log(props.num);
    return(
        <>
            <h2 className={style.dayNum} style={{ backgroundColor: props.currentDay === props.num ? estilos.active : estilos.inactive }}>
                {props.num}
            </h2>
        </>
    );
}

export default Day;