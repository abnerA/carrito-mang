import React from "react";
import style from "./Users.module.css";
import { useState, useEffect } from "react";
import { getPersons } from "../../firebase/app";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/features/IniciarSesion";


function Users(props) {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  // console.log(start.textButton);

  const [name, setName] = useState();
  const [per, setPer] = useState('');

  // const obtener = async () => {
  //   const p = await getPersons();
  //   setName(p.docs[0].data().name);
  // }

  useEffect(() => {
    getPersons().then(result => {
      setName(result.docs[0].data().name);
    }).then(err => {
      console.log(err);
    });
  }, []);

  const onInput = (e) => {
    e.preventDefault();
    setPer(e.target.value);
  }

  const handleClick = () => {
    setPer('');
    dispatch(login(['none', 'Salir', per]));
  }


  return (
    <div className={style.container} style={{ display: start.login }}>
        <span>X</span>
      <div className={style.content}>
          <label
            >Escribe tú nombre: <input list="nombres" value={per}
            name="hermanos" onChange={onInput}
          /></label>
          <datalist id="nombres">
          {!name ? 'loading...' : name.map((value, index) => {
            return <option key={index} value={value}></option>
            })}
          </datalist>
          <button onClick={handleClick}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default Users;
