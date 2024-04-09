import React, { useState } from "react";
import style from "./Login.module.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); // navigate para cambiar de ruta una vez inicida la sesión 

  const [estilo, setEstilo] = useState({display: 'none', message: ''})

  const emailValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  // Function para logearse
  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      navigate('/calendary');
    } catch (err) {
      if(err.code === 'auth/wrong-password') {
        setEstilo({
            display: 'block', 
            message: 'Contraseña incorrecta'
        })
      } else if (err.code === 'auth/user-not-found') {
        setEstilo({
            display: 'block', 
            message: 'Este usuario no existe'
        })
      } else if (err.code === 'auth/invalid-email') {
        setEstilo({
            display: 'block', 
            message: 'Debes poner un correo que sea valido'
        })
      } else {
          console.log(err.code);
      }
    }
  };

  const register = () => {
    navigate('/register');
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Acceso</h2>
      <form>
        <div className={style.group}>
          <label>Email</label>
          <input id="txtEmail" type="email" onChange={emailValue} />
        </div>

        <div className={style.group}>
          <label>Password</label>
          <input id="txtPassword" type="password" onChange={passwordValue} />
        </div>

        {/* Div para poner el mensaje de error */}
        <div className={style.messageError} style={{display: estilo.display}}>
            <p>{estilo.message}</p>
        </div>

        <button type="button" className={style.btn} onClick={logIn}>Iniciar sesión</button>
      </form>

        <div className={style.registro}>
            <p>¿Necesitas una cuenta?</p>
            <button type="button" className={style.btn} onClick={register}>Crear una cuenta</button>
        </div>


    </div>
  );
}

export default Login;
