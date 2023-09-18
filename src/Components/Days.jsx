import React, { useEffect, useState } from "react";
// import style from "./Days.module.css";
import Day from "./day";

function Days(props) {
  const [dia29, setDia29] = useState("block");
  const [dia30, setDia30] = useState("block");
  const [dia31, setDia31] = useState("block");

  // Para saber la cantidad total de días que tienes el mes, en el primer Render.
  useEffect(() => {
    const days = props.totalDays;
    if (days === 28) {
      setDia29({
        dia29: "none",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 29) {
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 30) {
      setDia31({
        dia31: "none",
      });
    }
  }, [props.totalDays]);

  return (
    <Day 
    firstDay={props.firstDay}
    day29={dia29}
    day30={dia30}
    day31={dia31}
    />
  );
  }

export default Days;
