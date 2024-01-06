import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Agregar docs
export const savedPersonName = async (name, email) => {
   addDoc(collection(db, "Hermanos"), {
    name: name,
    email: email
   });

}


// Leer docs
export const getPersons = async ()  => {
    const result = await getDocs(query(collection(db, 'Hermanos')));    
    // result.forEach((doc) => {
    //     console.log(doc.data().name);
    // });

    return result;
};


// const querySnapshot = await getDocs(collection(db, "Hermanos"));
// querySnapshot.forEach((doc) => {
//   console.log(typeof doc.data().name);
// });

// querySnapshot.docChanges().map(value => {
//     return console.log(value.doc.data().name);
// })

// DELETE
export const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'persons', id));
};

// UPDATE
export const updateItem = async (id, name) => {
    await updateDoc(doc(db, 'persons', id), {name});
};