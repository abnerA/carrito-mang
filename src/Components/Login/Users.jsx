import React from "react";
import style from "./Users.module.css";
import { useState, useEffect } from "react";
import { getPersons } from "../../firebase/app";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/features/IniciarSesion";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



function Users(props) {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  // console.log(start.textButton);

  const [name, setName] = useState();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const obtener = async () => {
  //   const p = await getPersons();
  //   setName(p.docs[0].data().name);
  // }

  useEffect(() => {
    getPersons().then(result => {
      setName(result.docs[0].data().name);
      setEmail(result.docs[0].data().email);
      
      // console.log(result.docs[0].data().name
      // .indexOf('Abner Estévez'));
    }).then(err => {
      console.log(err);
    });
  }, []);

  const nameUser = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  }

  const userPassword = (e) => {
    setPassword(e.target.value);
  }

  const userSign = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((value) => {
      console.log('Te has logeado ' + value.user.emailVerified);
      setUserName('');
      setPassword(''); 
      dispatch(login(['none', 'Salir', userName]));
    }).catch((error) => {
      alert(error);
    })
  } 

  const handleClick =  () => {
    let indexUser = name.indexOf(userName); // index 0
    let value = email[indexUser]; // en index 0 esta su correo
    if (indexUser >= 0) {
      userSign(value, password);
    } else {
      console.log('Usuario no exite');
    }
  }


  return (
    <div className={style.container} style={{ display: start.login }}>
        <span>X</span>
      <div className={style.content}>
          <label
            >Escribe tú nombre: <input list="nombres" value={userName}
            name="hermanos" onChange={nameUser}
          /></label>
          <datalist id="nombres">
          {!name ? 'loading...' : name.map((value, index) => {
            return <option key={index} value={value}></option>
            })}
          </datalist>
          <label>Contraseña:
            <input type="password" value={password} onChange={userPassword}/>
          </label>
          <br />
          <button onClick={handleClick}>Iniciar sesión</button>
        <div>
          <h4>Registrase:</h4>
          <label> Nombre
            <input type="text" />
          </label>
          <br />
          <label> Apellido
            <input type="text" />
          </label>
            <br />
          <label> Email
          <input type="text" />
        </label>
        <br />
        <label> Contraseña
          <input type="password" />
        </label>
        </div>
      </div>
    </div>
  );
}

export default Users;
