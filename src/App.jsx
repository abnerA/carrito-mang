import React from "react";
// import { useState, useEffect } from "react";
import Calendary from "./Components/Calendario/Calendary";
// import { getPersons } from "./firebase/app";
import { Header } from "./Components/Header/Header";
import Users  from "./Components/Modal/Users";
import style from "./App.module.css";

function App() {
//  const [name, setName] = useState(null);

//     useEffect(() => {
//         obtener()
//     }, [])

//  const obtener = async () => {
//     const p = await getPersons();
//     // console.log(p.docs[0].data().name);
//     setName(p.docs[0].data().name);
//  }

    return (
        <div className={style.container}>
            <div className={style.main}>
                <Users />
                <Header />
                <Calendary />
            </div>
        </div>
        // <div>
        //     <div>
        //         {!name ? 'loading...' : name.map((value, index) => {
        //             return <h4 key={index}>{value}</h4>
        //         })}
        //     </div>
        //     {/* <h4>{!name ? 'loading...' : name}</h4> */}
        // </div>
    );
};

export default App;