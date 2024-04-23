import { useEffect, useState } from "react";
import style from "./Participant.module.css";
import { useSelector } from "react-redux";
import { month } from "../Calendario/Days";

const returnDaySpanish = (value) => { // Me devuelve el día de la semana en español de acuerdo al número
  if (value === 0) {
      return 'Domingo';
  } else if (value === 1) {
    return 'Lunes';
  } else if (value === 2) {
    return 'Martes'
  } else if (value === 3) {
    return 'Miércoles';
  } else if (value === 4) {
    return 'Jueves';
  } else if (value === 5) {
    return 'Viernes';
  } else if (value === 6) {
    return 'Sábado';
  }
}

function Shares() {
  const start = useSelector((state) => state.inicio);
  const [saved, setSaved] = useState("");
  const [count, setCount] = useState();
  const [turno, setTurno] = useState();
  const user = start.userLogin;
  const obj = start.fullMonthArray;
  let monthIngles = month(start.monthCurrent);
  
  const obtenerDay = (value) => { // está función me devuelve el día de la semana en español.
    let daySelectDate = new Date(`${monthIngles} ${value} ${start.year}`);
    let dayWeek = daySelectDate.getDay();
    return returnDaySpanish(dayWeek)
  }
  
  useEffect(() => {
    let counter = 0;
    let savedArr = [];
    let tarMan = [];

    for (let i = 0; i < obj.length; i++) {
      for (let j = 0; j < obj.length; j++) {
        if (obj[i][j] === user) {
          savedArr.push(i + 1);
          const anotacion1 = obj[i].findIndex((value) => {
            return value === user; 
          });
          const anotacion2 = obj[i].findLastIndex((value) => {
            return value === user;
          });
          if(anotacion1 <= 2) {
            tarMan.push('Mañana')
          } 
          if (anotacion2 >= 3) {
            tarMan.push('Tarde')
          }
          counter++ // Cuenta el número de veces que estoy anotado
        }
      }
    }
    setCount(counter); 
    setSaved(savedArr);
    setTurno(tarMan.slice(2, 7));
  }, [obj, user, count]);

  return (
    <div className={style.shares}>
      <h4>Mis participaciones del mes:</h4>
      <div className={style.participant}>
          {!saved ? "loadding" : saved.map((value, index) => {
                return <h5 key={index}>{`${obtenerDay(value)} ${value} ${turno[index]}`}</h5>})
          }
      </div>
    </div>
  );
}

export default Shares;
