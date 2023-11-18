import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/features/IniciarSesion";

export function Header() {
const start = useSelector((state) => state.inicio);
const dispatch = useDispatch();

function handleClick() {
  if (start.textButton === 'Salir') {
    dispatch(login(['none', 'Iniciar sesión', '']))
  } else {
    dispatch(login(['flex', 'Iniciar sesión', '']));
  }
}

  return (
    <header className={style.header}>
      <h3 className={style.title}>Arreglo de Predicación Pública</h3>
      <nav className={style.nav}>
        <h4>{start.nameLog}</h4>
        <button className={style.start} onClick={handleClick} >{start.textButton}</button>
      </nav>
    </header>
  );
}

