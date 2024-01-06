import React from "react";
import style from "./ModalAddParticipant.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalParticipant } from "../../Redux/features/IniciarSesion";

function ModalAddParticipant() {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(modalParticipant('none'))
  }
 
  return (
    <div className={style.container} style={{display: start.modalAddParticipant}}>
      <span className={style.modalClose} onClick={handleClick}>X</span>
      <div className={style.content}>
        <h2>Te puede anotar</h2>
      </div>
    </div>
  );
}

export default ModalAddParticipant;
