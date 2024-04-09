import style from "./Participantes.module.css";

function Participantes(props) {

    return (
        <div className={style.container}>
            <div className={style.manTar}>
                <h6>Mañana</h6>
                {!props.names ? '' : props.names.slice(0, 3).map((value, index) => {
                    return <p className={style.names} key={index}>{value}</p>
                })}
            </div>
            <div className={style.manTar}>
                <h6>Tarde</h6>
                {!props.names ? '' : props.names.slice(3, 6).map((value, index) => {
                    return <p className={style.names} key={index}>{value}</p>
                })}
            </div>
        </div>
    );
}

export default Participantes;