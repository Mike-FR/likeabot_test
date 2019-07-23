import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyAbxWzVHG0LSNd5TMo3RDujcnCaNLLSf2E",
    authDomain: "likeabot-d831e.firebaseapp.com",
    databaseURL: "https://likeabot-d831e.firebaseio.com",
    projectId: "likeabot-d831e",
    storageBucket: "",
    messagingSenderId: "564172328924",
    appId: "1:564172328924:web:9f4da95e30923b77"
  })

  export const db = app.database();
  export const datasRef = db.ref('register')
  