import React from "react";
import style from "./Participantes.module.css";
// import { useSelector } from "react-redux";

function Participantes(props) {
    // const start = useSelector((state) => state.inicio);
    // console.log(start)

    return (
        <div className={style.container}>
            <div className={style.manTar}>
                <h6>Mañana</h6>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Abner Estévez' : null}</p>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Sthepanie Pichardo' : null}</p>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Juan Carlos Mercedes' : null}</p>
            </div>
            <div className={style.manTar}>
                <h6>Tarde</h6>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Guillermina Mesa' : null}</p>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Ana De Los Santos' : null}</p>
                <p className={style.names}>{props.num === 6 || props.num === 7 || props.num === 9 || props.num === 11 ? 'Rosa Domínguez' : null}</p>
            </div>
        </div>
    );
}

export default Participantes;