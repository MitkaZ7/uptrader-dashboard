import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase'
class Api {
   

    getTasks() {
     
       const res =  getDocs(collection(db,'tasks'))
            .then((querySnapshot) =>{
                const tasksArray = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
                console.log(tasksArray)
                return tasksArray;
            });
            return res;
    }

    addTask(taskData) {

    }
   

}
// export const getAllTasks = async () => {

//     await getDocs(collection(db, "tasks"))
//         .then((querySnapshot) => {
//             const newData = querySnapshot.docs
//                 .map((doc) => ({ ...doc.data(), id: doc.id }));
//             return newData;
//         })

// }



const api = new Api();
export default api;
