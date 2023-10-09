import React from "react";
import style from "./Participantes.module.css";
import { useSelector } from "react-redux";

function Participantes(props) {
    const start = useSelector((state) => state.inicio);
    console.log(start)

    return (
        <div className={style.container}>
            <div>
                <h6>Mañana</h6>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'Abner Estévez' : null}</p>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'Alba Estévez' : null}</p>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'Kenia Torres' : null}</p>
            </div>
            <div>
                <h6>Tarde</h6>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'Guillermina Mesa' : null}</p>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'Ana De Los Santos' : null}</p>
                <p>{props.num === 2 || props.num === 3 || props.num === 5 ? 'R. Domínguez' : null}</p>
            </div>
        </div>
    );
}

export default Participantes;