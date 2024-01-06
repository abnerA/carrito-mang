import React from "react";
import Calendary from "./Components/Calendario/Calendary";
import { Header } from "./Components/Header/Header";
import Users  from "./Components/Login/Users";
import ModalAddParticipant from "./Components/Participantes/ModalAddParticipant";
import style from "./App.module.css";

function App() {
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