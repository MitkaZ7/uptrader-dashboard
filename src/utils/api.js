import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from './firebase'

export function getTasks() {
    return db.collection('tasks')
        .get()
        .then(snapshot => {
            const tasksArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return tasksArr;
        });
}

export function createTask(data) {
    return db.collection('tasks').add({
        ...data,
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}
export function updateTodo(todoId, data) {
    return db.collection('tasks').doc(todoId).update(data)
        .then(() => ({
            id: todoId,
            ...data
        }));
}
