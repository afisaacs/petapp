import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID
}

firebase.initializeApp(config)

export const { auth } = firebase
export const provider = new firebase.auth.FacebookAuthProvider()