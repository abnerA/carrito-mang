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

 function month(value) {
  if (value === "Enero") {
    return "jan";
  } else if (value === "Febrero") {
    return "feb";
  } else if (value === "Marzo") {
    return "mar";
  } else if (value === "Abril") {
    return "apr";
  } else if (value === "Mayo") {
    return "may";
  } else if (value === "Junio") {
    return "jun";
  } else if (value === "Julio") {
    return "jul";
  } else if (value === "Agosto") {
    return "aug";
  } else if (value === "Septiembre") {
    return "sep";
  } else if (value === "Octubre") {
    return "oct";
  } else if (value === "Noviembre") {
    return "nov";
  } else if (value === "Diciembre") {
    return "dec";
  }
}


function Days(props) {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  const [day, setDay] = useState("");

  // console.log(day);

  useEffect(() => {

    const starCountRef = ref(dataB, props.stateMonth + "/");
    
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let newList = [];
      for (let i = 1; i < props.totalDays + 1; i++) {
        let numDias = "day" + i;
        newList.push(data[numDias].name);
      }
      setDay(newList);
      dispatch(buttonAddParticipant(newList));
    });
  }, [props.stateMonth, props.totalDays]);

  const boton = (e) => {
    let obtenerMonth = month(props.stateMonth);
    let daySelectDate = new Date(`${obtenerMonth} ${e} ${props.stateYear}`);
    const dayWeek = () => {
      if (daySelectDate.getDay() === 0) {
          return 'Domingo';
      } else if (daySelectDate.getDay() === 1) {
        return 'Lunes';
      } else if (daySelectDate.getDay() === 2) {
        return 'Martes'
      } else if (daySelectDate.getDay() === 3) {
        return 'Miércoles';
      } else if (daySelectDate.getDay() === 4) {
        return 'Jueves';
      } else if (daySelectDate.getDay() === 5) {
        return 'Viernes';
      } else if (daySelectDate.getDay() === 6) {
        return 'Sábado';
      }
    }

    let nombre = start.nameLog;
    // const arrName = day[e - 1];
    // console.log(arrName);

    dispatch(modalParticipant([dayWeek(), e, props.stateMonth])); 

      if (day[e - 1].indexOf("") === -1) {
        dispatch(buttonDisabled(true));
        console.log("no hay espacio disponible");
      } else if (day[e - 1].indexOf(nombre) > -1) {
        dispatch(buttonDisabled(true));
        console.log("tu nombre ya esta aquí");
      } else {
        dispatch(buttonDisabled(false));
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
