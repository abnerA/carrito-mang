import React from "react";
import style from "./Users.module.css";
import { useState, useEffect } from "react";
import { getPersons } from "../../firebase/app";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Redux/features/IniciarSesion";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Register from "./Register";



function Users() {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registro, setRegistro] = useState('none');

  useEffect(() => {
    getPersons().then(result => {
      let data = [];
      let correo = [];
      result.forEach((doc) => {
        data.push({name: doc.data().name});
        correo.push({email: doc.data().email})
      });
      setName(data)
      setEmail(correo)

    }).catch(e => {
      console.log(e);
    });
  }, []);
  

  const nameUser = (e) => {
    setUserName(e.target.value);
  }

  const userPassword = (e) => {
    setPassword(e.target.value);
  }

  const userSign = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((value) => {
      console.log('Has confirmado tu correo ' + value.user.emailVerified); // Para saber si el usario confirmo su correo 
      setUserName('');
      setPassword(''); 
      dispatch(login(['none', 'Salir', userName]));
    }).catch((e) => {
      if (e.code === 'auth/invalid-login-credentials') {
        alert('Tú contraseña es incorrecta')
      } else {
        alert(e.code);
      }
    })
  } 

  const handleClick =  () => {
    let nombre = name.map(value => {
      let info = value.name
      return info;
    });

    if (nombre.indexOf(userName) === -1) {
      alert('usuario no existe, por favor revisa tu usuario');
    } else {
      const userEmail = email[nombre.indexOf(userName)].email;
      userSign(userEmail, password);
    }
  }

  const closeModal = () => {
    if (start.textButton === 'Iniciar sesión') {
      dispatch(login(['none', 'Iniciar sesión', '']))
      setRegistro('none');
    }
  }
  return (
    <div className={style.container} style={{ display: start.login }}>
        <span className={style.modalClose} onClick={closeModal}>X</span>
      <div className={style.content}>
        <div className={style.login} style={{display: registro === 'none' ? 'flex' : 'none'}}>
          <label
            >Escribe tú nombre: <input list="nombres" value={userName}
            name="hermanos" onChange={nameUser}
          /></label>
          <datalist id="nombres">
          {!name ? 'loading...' : name.map((value, index) => {
            return <option key={index} value={value.name}></option>
            })}
          </datalist>
          <label>Contraseña:
            <input type="password" value={password} onChange={userPassword}/>
          </label>
          <br />
          <button onClick={handleClick}>Iniciar sesión</button>
          <button onClick={() => {setRegistro('flex')}}>
            Registrarse
          </button>
        </div>
        <div>
          <Register
            modal={registro}
            fullName={name}
           />
        </div>
      </div>
    </div>
  );
}

export default Users;
