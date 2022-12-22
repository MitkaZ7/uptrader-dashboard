// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRM8_w_O6-gY2CozzyrXLcR7V2bUea_cI",
//   authDomain: "trello-analogue-5ff8d.firebaseapp.com",
//   projectId: "trello-analogue-5ff8d",
//   storageBucket: "trello-analogue-5ff8d.appspot.com",
//   messagingSenderId: "380840014330",
//   appId: "1:380840014330:web:8ab782c9a3fc80d1d87443"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import Parse from 'parse/dist/parse.min.js';

// const key = 'wuzg9CKxCYnUt3vk4vLNiLEZ39kZn8c2B2JztQFf';
// const id = 'J4wgwGOfDOJTXZBl9FZR4xwVmCZUQYhBwEgqN3pQ';
// const server = 'https://parseapi.back4app.com/';
// Parse.initialize(id, key);
// Parse.serverURL = server;

// export async function addPerson() {
//   try {
//     // create a new Parse Object instance
//     const Person = new Parse.Object('Person');
//     // define the attributes you want for your Object
//     Person.set('name', 'John');
//     Person.set('email', 'john@back4app.com');
//     // save it on Back4App Data Store
//     await Person.save();
//     alert('Person saved!');
//   } catch (error) {
//     console.log('Error saving new person: ', error);
//   }
// }

// export async function fetchPerson() {
//   // create your Parse Query using the Person Class you've created
//   const query = new Parse.Query('Person');
//   // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
//   query.equalTo('name', 'John');
//   // run the query
//   const Person = await query.first();
//   // access the Parse Object attributes
//   console.log('person name: ', Person.get('name'));
//   console.log('person email: ', Person.get('email'));
//   console.log('person id: ', Person.id);

// }

