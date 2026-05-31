import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, doc, getDoc, runTransaction } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrT4cVgh7l9v2WH_pQmese4ZnVO-_5t1k',
  authDomain: 'landing-page-b7dd3.firebaseapp.com',
  projectId: 'landing-page-b7dd3',
  storageBucket: 'landing-page-b7dd3.firebasestorage.app',
  messagingSenderId: '685986534187',
  appId: '1:685986534187:web:522e3c3a75a3a65fe7ab6e',
  measurementId: 'G-8MG09H39R4',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

const VIDEO_COUNTER_COLLECTION = 'videoCounter'
const VISITOR_COUNTER_DOC = 'uniqueVisitors'
const counterDocRef = doc(db, VIDEO_COUNTER_COLLECTION, VISITOR_COUNTER_DOC)

export async function getVisitorCountFromFirestore() {
  const snapshot = await getDoc(counterDocRef)
  return snapshot.exists() ? Number(snapshot.data()?.count ?? 0) : 0
}

export async function incrementUniqueVisitorCount() {
  const nextCount = await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(counterDocRef)
    const currentCount = snapshot.exists() ? Number(snapshot.data()?.count ?? 0) : 0
    const updatedCount = currentCount + 1
    transaction.set(counterDocRef, { count: updatedCount }, { merge: true })
    return updatedCount
  })

  return nextCount
}
