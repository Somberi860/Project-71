import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 var firebaseConfig = {
  apiKey: "AIzaSyC0P1IfRJEP-xvF-GVCzxTtF2xnzWFKdYg",
  authDomain: "complaint-forum-43721.firebaseapp.com",
  projectId: "complaint-forum-43721",
  storageBucket: "complaint-forum-43721.appspot.com",
  messagingSenderId: "595979118650",
  appId: "1:595979118650:web:f70b3fc6521e314b8fed03"
 
};
}
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

