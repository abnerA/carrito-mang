import Calendary from "./Components/Calendario/Calendary";
import { Header } from "./Components/Header/Header";
import Participant from "./Components/Participantes/Participant";
import style from "./App.module.css";



function App() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Header />
                <Calendary />
                <Participant />
            </div>
        </div>
    );
};

export default App;