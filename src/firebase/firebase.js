import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, connectAuthEmulator } from "firebase/auth";
import { getDatabase, onValue, ref, set} from "firebase/database";

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
connectAuthEmulator(auth, "http://localhost:9099");

// Para acceder a la DB de Firestore Database
export const db = getFirestore(app);

// Para acceder a la DB de Realtime Database
export const dataB = getDatabase(app);
const starCountRef = ref(dataB, "Abril/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

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

// addName("day1", ["", "", "", "", "", ""], "Abril/");
// addName("day2", ["", "", "", "", "", ""], "Abril/");
// addName("day3", ["", "", "", "", "", ""], "Abril/");
// addName("day4", ["", "", "", "", "", ""], "Abril/");
// addName("day5", ["", "", "", "", "", ""], "Abril/");
// addName("day6", ["", "", "", "", "", ""], "Abril/");
// addName("day7", ["", "", "", "", "", ""], "Abril/");
// addName("day8", ["", "", "", "", "", ""], "Abril/");
// addName("day9", ["", "", "", "", "", ""], "Abril/");
// addName("day10", ["", "", "", "", "", ""], "Abril/");
// addName("day11", ["", "", "", "", "", ""], "Abril/");
// addName("day12", ["", "", "", "", "", ""], "Abril/");
// addName("day13", ["", "", "", "", "", ""], "Abril/");
// addName("day14", ["", "", "", "", "", ""], "Abril/");
// addName("day15", ["", "", "", "", "", ""], "Abril/");
// addName("day16", ["", "", "", "", "", ""], "Abril/");
// addName("day17", ["", "", "", "", "", ""], "Abril/");
// addName("day18", ["", "", "", "", "", ""], "Abril/");
// addName("day19", ["", "", "", "", "", ""], "Abril/");
// addName("day20", ["", "", "", "", "", ""], "Abril/");
// addName("day21", ["", "", "", "", "", ""], "Abril/");
// addName("day22", ["", "", "", "", "", ""], "Abril/");
// addName("day23", ["", "", "", "", "", ""], "Abril/");
// addName("day24", ["", "", "", "", "", ""], "Abril/");
// addName("day25", ["", "", "", "", "", ""], "Abril/");
// addName("day26", ["", "", "", "", "", ""], "Abril/");
// addName("day27", ["", "", "", "", "", ""], "Abril/");
// addName("day28", ["", "", "", "", "", ""], "Abril/");
// addName("day29", ["", "", "", "", "", ""], "Abril/");
// addName("day30", ["", "", "", "", "", ""], "Abril/");
// addName("day31", ["", "", "", "", "", ""], "Abril/");
