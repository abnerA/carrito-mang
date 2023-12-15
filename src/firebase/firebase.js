import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8P-ryUneWTaKIiJ5NSwmg3kEH-mljwg",
  authDomain: "carrito-mang.firebaseapp.com",
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

// console.log(createAccount);
// createAccount("nerpa.c@hotmail.com", "Prueba02")

// Function para obtner datos de usarios ya registrados
const userSign = async (email, password) => {
  try {
    const login = await signInWithEmailAndPassword(auth, email, password);
    console.log('Te has logeado ' + login.user.emailVerified); 
  }
  catch(error) {
    console.log(error);
  }
} 

// userSign("nerpa.c@hotmail.com", "Prueba02"); 

// Para enviar mensaje de verificación de usuario

// const sendEmail = async () => {
//   sendEmailVerification(auth.currentUser)
//   .then(() => {
//     console.log('Email enviado');
//   })
// }

// sendEmail();