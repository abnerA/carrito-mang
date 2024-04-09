import React, { useEffect, useState } from "react";
import style from "./Days.module.css";
import Day from "./Day";
import { useSelector, useDispatch } from "react-redux";
import {
  buttonAddParticipant,
  buttonDisabled,
  modalParticipant,
} from "../../Redux/features/IniciarSesion";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

function Days(props) {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  const [day, setDay] = useState("");

  useEffect(() => {
    const starCountRef = ref(dataB, props.stateMonth + "/");
    return onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let newList = [];
      for (let i = 1; i < props.totalDays + 1; i++) {
        let numDias = "day" + i;
        newList.push(data[numDias].name);
      }
      setDay(newList);
    });
  }, [props.stateMonth, props.totalDays]);

  const boton = (e) => {
    let nombre = start.nameLog;
    const arrName = day[e - 1];

    if (start.nameLog === "") {
      alert("Tienes que iniciar sesión");
    } else {
      dispatch(modalParticipant(["flex", e, props.stateMonth]));
      if (day[e - 1].indexOf("") === -1) {
        dispatch(buttonDisabled(true));
        console.log("no hay espacio disponible");
      } else if (day[e - 1].indexOf(nombre) > -1) {
        dispatch(buttonDisabled(true));
        console.log("tu nombre ya esta aquí");
      } else {
        dispatch(buttonDisabled(false));
        dispatch(buttonAddParticipant(arrName));
      }
    }
  };
  return (
    <div className={style.containerDays}>
      {(function () {
        let persons = [];
        for (let i = 1; i < props.totalDays + 1; i++) {
          persons.push(
            <div
              key={i}
              className={style.days}
              onClick={() => boton(i)}
              style={{gridColumnStart: i === 1 && props.firstDay === 0 ? 7 : i === 1 && props.firstDay}}>
              <Day
                num={i}
                currentDay={props.currentDay}
                currentMonth={props.currentMonth}
                stateMonth={props.stateMonth}
                stateYear={props.stateYear}
                currentYear={props.currentYear}
                names={day[i - 1]}
              />
            </div>
          );
        }
        return persons;
      })()}
    </div>
  );
}

export default Days;
