import React from "react";
import Calendary from "./Components/Calendario/Calendary";
import { Header } from "./Components/Header/Header";
import Users  from "./Components/Login/Users";
import ModalAddParticipant from "./Components/Participantes/ModalAddParticipant";
import style from "./App.module.css";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

function App() {
  // En useEffect estamos comprobando si se ha iniciado sesión
  useEffect(() => {
    const monitorAuthState = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user.displayName === null) {
          console.log("vete de aquí");
        } else {
          console.log("Bienvenido");
        }
      });
    };
    monitorAuthState();
  }, []);

    return (
        <div className={style.container}>
            <div className={style.main}>
                <ModalAddParticipant />
                <Users />
                <Header />
                <Calendary />
            </div>
        </div>
    );
};

export default App;