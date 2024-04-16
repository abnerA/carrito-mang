import style from "./Participant.module.css";
import { useSelector } from "react-redux";
import { addparticipation } from "../../firebase/firebase";
import { useEffect, useState } from "react";

function Participant() {

  const [names, setNames] = useState('');
   const start = useSelector((state) => state.inicio);
  //  console.log(start);

  useEffect(() => {
    setNames(start.arrayParticipant[start.daySelect - 1])
  }, [start.daySelect, start.arrayParticipant])

  const addParticipant = () => {
    let dayNum = 'day' + start.daySelect;
    let month = start.monthCurrent + '/';
    let nombre = start.nameLog;
    let arrName = start.arrayParticipant;

    const objCopy = [...arrName];
    let arrIndex = arrName.indexOf('');
    objCopy[arrIndex] = nombre;

      // Function de firebase para agregar participante 
    addparticipation(dayNum, objCopy, `${month}/`);

    // Function de firebase para agregar las fechas de las participaciones
  }
 
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h4>{start.dayWeek} {start.daySelect} de {start.monthCurrent}</h4>
        <div>
          <p><strong>Lugar:</strong> Cruce de Manoguayabo</p>
          <h5>Turno de la mañana 7:00 a 10:00 AM.</h5>
            <p>{!names ? '' : names[0]}</p>
            <p>{!names ? '' : names[1]}</p>
            <p>{!names ? '' : names[2]}</p>
          <button disabled={start.btnDisabled} onClick={addParticipant}>Anotarme</button>
          <button>Quitarme</button>
          <hr />
        </div>
        <div>
          <h5>Turno de la tarde de 4:00 a 7:00 PM.</h5>
            <p>{!names ? '' : names[3]}</p>
            <p>{!names ? '' : names[4]}</p>
            <p>{!names ? '' : names[5]}</p>
          <button disabled={start.btnDisabled} onClick={addParticipant}>Anotarme</button>
          <button>Quitarme</button>
        </div>
      </div>
    </div>
  );
}

export default Participant;
