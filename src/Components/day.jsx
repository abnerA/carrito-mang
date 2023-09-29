import React from "react";
// import style from "./Day.module.css";
import Festivity from "./Festivity";


function Day(props) {
    return(
        <>
            <Festivity
            stateMonth={props.stateMonth}
            currentMonth={props.currentMonth}
            stateYear={props.stateYear}
            currentYear={props.currentYear}
            currentDay={props.currentDay}
            num={props.num}
             />
        </>
    );
}

export default Day;