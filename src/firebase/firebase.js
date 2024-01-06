import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, onValue, set} from "firebase/database";

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

const starCountRef = ref(dataB, 'Agosto/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});


// addparticipation("Blanco", [""], "Agosto/")
// addparticipation("Samuel Pérez", ["", "", "", "", ""], "Agosto/")

// addName("day1", ["", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);

