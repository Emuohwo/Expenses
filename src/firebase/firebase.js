// firebase@4.2.0
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
const database = firebase.database();


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
    
// })
// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
    
// })
// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
    
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })


// database.ref('expenses')
// .once('value')
// .then((snapshots) => {
//     // const val = snapshots.val()
//     // console.log(val)
//     const expenses = [];

//     snapshots.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses)
// })

// database.ref('expenses').push({
//     amount: 42309,
//     createAt: 56444879,
//     description: 'Food',
//     note: 'This Food was for the month of may'
// })

// database.ref('notes').push({
//     title: 'New Tutorials',
//     body: 'This covers all the essencial of programming'
// })

// database.ref('notes/-M5pNApMMqgCfLVIFDCd').remove();

// database.ref().set({
//     name: 'Wise',
//     age: 30,
//     isSingle: true,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'lagos',
//         country: 'Nigeria'
//     }
// }).then(() => {
//     console.log('Data saved successfully!')
// }).catch((e) => {
//     console.log('Operation failed', e)
// })


// database.ref('attributes').set({
//         height: 5,
//         weight: 69
// })
//     .then(() => {
//         console.log('Data saved successfully!')
//     }).catch((e) => {
//         console.log('Operation failed', e)
//     })

// database.ref().update({
//     isSingle: null,
//     'job/title': 'Marketing',
//     'job/company': 'Andela',
//     'location/city': 'Delta'
// }).then(() => {
//     console.log('Data Updated Successfully');
// }).catch((err) => {
//     console.log('Update failed:', err);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Failed fetching', e)
// })

// setTimeout(() => {
//     database.ref('name').set('Mike')
// }, 3000);
// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 3000);
// setTimeout(() => {
//     database.ref('name').set('Johnson!')
// }, 10000);
// database.ref()
// .once('value')
// .then((shapshots) => {
//     const val = shapshots.val()
//     console.log(val)
// })
// .catch((err) => {
//     console.log('Error fecthing data: ', err)
// })
// database.ref('isSingle')
// .remove().then(() => {
//     console.log('Data removed successfully!')
// }).catch((e) => {
//     console.log('Operation failed', e)
// })
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>
