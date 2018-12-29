import firebase from 'firebase'
import 'firebase/app'

var config = {
    apiKey: "AIzaSyAnzOpVsE72rRqZfmCsFSJ6dI0XPE3IcDk",
    authDomain: "vue-project-20372.firebaseapp.com",
    databaseURL: "https://vue-project-20372.firebaseio.com",
    projectId: "vue-project-20372",
    storageBucket: "vue-project-20372.appspot.com",
    messagingSenderId: "1019969519515"
  };
  firebase.initializeApp(config);

 const db = firebase.firestore()
 db.settings({ timestampsInSnapshots: true })

 export default db
