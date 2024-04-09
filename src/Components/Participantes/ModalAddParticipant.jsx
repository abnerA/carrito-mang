import style from "./ModalAddParticipant.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalParticipant } from "../../Redux/features/IniciarSesion";
import { addparticipation } from "../../firebase/firebase";
function ModalAddParticipant() {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(modalParticipant(['none']));
  }

  const addParticipant = () => {
    let dayNum = 'day' + start.daySelect;
    let month = start.monthCurrent + '/';
    let nombre = start.nameLog;
    let arrName = start.arrayParticipant;
    const objCopy = [...arrName];
    let arrIndex = arrName.indexOf('');
    objCopy[arrIndex] = nombre;

  
    addparticipation(dayNum, objCopy, `${month}/`);
  }
 
  return (
    <div className={style.container} style={{display: start.modalAddParticipant}}>
      <span className={style.modalClose} onClick={handleClick}>X</span>
      <div className={style.content}>
        <h2>Te puede anotar</h2>
        <button disabled={start.btnDisabled} onClick={addParticipant}>Anotarme</button>
        <button>Quitarme</button>
      </div>
    </div>
  );
}

export default ModalAddParticipant;
