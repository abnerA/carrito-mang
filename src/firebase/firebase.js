import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, connectAuthEmulator } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8P-ryUneWTaKIiJ5NSwmg3kEH-mljwg",
  authDomain: "carrito-mang.firebaseapp.com",
  databaseURL: "https://carrito-mang-default-rtdb.firebaseio.com",
  projectId: "carrito-mang",
  storageBucket: "carrito-mang.appspot.com",
  messagingSenderId: "604021359809",
  appId: "1:604021359809:web:3ebc41fd30618278854040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

// Para acceder a la DB de Firestore Database
export const db = getFirestore(app);

// Para acceder a la DB de Realtime Database
export const dataB = getDatabase(app);

// Function para crear nuevos usuarios
export const createAccount = async (email, password) => {
  try {
    const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredencial.user);
  }
  catch(error) {
    console.log(error);
  }
}

// Para enviar mensaje de verificación de usuario

export const sendEmail = async () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('Email enviado');
  })
}

// Realtime Database
export function addName(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// Con está function guardamos las fechas en que vamos a participar
export function addparticipation(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// const starCountRef = ref(dataB, 'Enero/');

// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   let datos = Object.keys(data);
//   for (let i = 0; i < datos.length; i++) {
//     let info = datos[i]
//     console.log(data[info].name);
//   }
// });


// addparticipation("Samuel Pérez", ["", "", "", "", ""], "Agosto/")

// addName("day1", ["", "", "", "", "", ""], "Diciembre/");
// addName("day2", ["", "", "", "", "", ""], "Diciembre/");
// addName("day3", ["", "", "", "", "", ""], "Diciembre/");
// addName("day4", ["", "", "", "", "", ""], "Diciembre/");
// addName("day5", ["", "", "", "", "", ""], "Diciembre/");
// addName("day6", ["", "", "", "", "", ""], "Diciembre/");
// addName("day7", ["", "", "", "", "", ""], "Diciembre/");
// addName("day8", ["", "", "", "", "", ""], "Diciembre/");
// addName("day9", ["", "", "", "", "", ""], "Diciembre/");
// addName("day10", ["", "", "", "", "", ""], "Diciembre/");
// addName("day11", ["", "", "", "", "", ""], "Diciembre/");
// addName("day12", ["", "", "", "", "", ""], "Diciembre/");
// addName("day13", ["", "", "", "", "", ""], "Diciembre/");
// addName("day14", ["", "", "", "", "", ""], "Diciembre/");
// addName("day15", ["", "", "", "", "", ""], "Diciembre/");
// addName("day16", ["", "", "", "", "", ""], "Diciembre/");
// addName("day17", ["", "", "", "", "", ""], "Diciembre/");
// addName("day18", ["", "", "", "", "", ""], "Diciembre/");
// addName("day19", ["", "", "", "", "", ""], "Diciembre/");
// addName("day20", ["", "", "", "", "", ""], "Diciembre/");
// addName("day21", ["", "", "", "", "", ""], "Diciembre/");
// addName("day22", ["", "", "", "", "", ""], "Diciembre/");
// addName("day23", ["", "", "", "", "", ""], "Diciembre/");
// addName("day24", ["", "", "", "", "", ""], "Diciembre/");
// addName("day25", ["", "", "", "", "", ""], "Diciembre/");
// addName("day26", ["", "", "", "", "", ""], "Diciembre/");
// addName("day27", ["", "", "", "", "", ""], "Diciembre/");
// addName("day28", ["", "", "", "", "", ""], "Diciembre/");
// addName("day29", ["", "", "", "", "", ""], "Diciembre/");
// addName("day30", ["", "", "", "", "", ""], "Diciembre/");
// addName("day31", ["", "", "", "", "", ""], "Diciembre/");
