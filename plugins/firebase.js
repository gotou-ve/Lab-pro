import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBMUkTrwM1QcRTtmKbYi3npGpqYL3tQp7o',
    authDomain: 'mytodolist-c8869.firebaseapp.com',
    databaseURL: 'https://mytodolist-c8869.firebaseio.com',
    projectId: 'mytodolist-c8869',
    storageBucket: 'mytodolist-c8869.appspot.com',
    messagingSenderId: '724542455303',
    appId: '1:724542455303:web:93ee0f5727ae01f0f334a2',
    measurementId: 'G-EV7X746JG3'
  })
}

export default firebase
