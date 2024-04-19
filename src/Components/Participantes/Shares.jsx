import { useEffect, useState } from "react";
import style from "./Participant.module.css";
import { useSelector } from "react-redux";

function Shares() {
    const [saved, setSaved] = useState('')
  const start = useSelector((state) => state.inicio);
  const user = start.userLogin;
  const obj = start.fullMonthArray;
  let counter = 0;
  
//   useEffect(() => {
//       let savedArr = [''];
    
//     for (let i = 0; i < obj.length; i++) {
//       for (let j = 0; j < obj.length; j++) {
//         if (obj[i][j] === user) {
//         //   console.log(obj[i].indexOf(user)); // La posición de dónde está el nombre
//         //   console.log(user + " " + [i + 1]); // El día del mes en que estoy anotado
//           savedArr.concat(user[i + 1]);
//           setSaved(saved);
//           counter++; // Cuenta el número de veces que estoy anotado
//         }
//       }
//     }
//     console.log(saved);
//   }, [counter, obj, saved, user]);

  return (
    <div className={style.shares}>
      <h4>Mis participaciones del mes:</h4>
    </div>
  );
}

export default Shares;
