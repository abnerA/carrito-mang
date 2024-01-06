import React from "react";
import style from "./Register.module.css";
import { useState } from "react";
import { savedPersonName } from "../../firebase/app";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { sendEmail } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";



function Register(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nombre = (e) => {
    setName(e.target.value)
  }

  const apellido = (e) => {
    setLastName(e.target.value)
  }

  const correo = (e) => {
    setEmail(e.target.value)
  }

  const contraseña = (e) => {
    setPassword(e.target.value)
  }

  // Function para crear nuevo usuario
  const createAccount = async (email, password) => {
    try {
      const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredencial)
      // La siguiente function es para enviar correo de confirmación de su correo
      sendEmail()
      alert(`Ya estas registrado ${name} ${lastName}`)
    }
    catch(e) {
      if (e.code === 'auth/invalid-email') {
        alert('Tú email no ha sido valido')
      } else if (e.code === 'auth/weak-password') {
        alert('Tu contraseña es muy debil')
      } else if (e.code === 'auth/email-already-in-use') {
        alert(`Este correo ya existe ${email}`)
      } else {
        console.log(e.message);
      }
    }
  }

  const submit = () => {
    let fullName = name.charAt(0).toUpperCase() + name.slice(1);
    let fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    let nombre = props.fullName.map(value => {
      let info = value.name
      return info;
    });

    if (nombre.indexOf(fullName + ' ' + fullLastName) >= 0) {
      alert('Este nombre de usario ya existe');
    } else {
      createAccount(email, password)
      savedPersonName(fullName + ' ' + fullLastName, email);
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }


  }
  return (
    <div className={style.container} style={{display: props.modal}}>
      <label>
        {"Nombre"}
        <input type="text" value={name} onChange={nombre} />
      </label>
      <label>
        {"Apellido"}
        <input type="text" value={lastName} onChange={apellido} />
      </label>
      <label>
        {"Email"}
        <input type="text" value={email} onChange={correo} />
      </label>
      <label>
        {"Contraseña"}
        <input type="password" value={password} onChange={contraseña} />
      </label>
      <button onClick={submit}>Registrarse</button>
    </div>
  );
}

export default Register;