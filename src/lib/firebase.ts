import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment, collection, onSnapshot, serverTimestamp, setLogLevel } from 'firebase/firestore';

setLogLevel('silent');

const firebaseConfig = {
  apiKey: "AIzaSyDEeuHrw5Q5lu-rOYcTNMQbfQ-ejjUFam4",
  authDomain: "jbmrcricket.firebaseapp.com",
  projectId: "jbmrcricket",
  storageBucket: "jbmrcricket.firebasestorage.app",
  messagingSenderId: "289363783537",
  appId: "1:289363783537:web:c529572a78b4369fef50d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-jbmrsportsv2-00a04c04-91ea-4de8-b95a-4410a7466959");

// Helper to increment total visits in Firestore and return updated total
export async function incrementAndGetTotalVisits(): Promise<number> {
  try {
    const statsRef = doc(db, 'analytics', 'site_stats');
    const snap = await getDoc(statsRef);
    
    // Check if user already counted this session in sessionStorage
    const sessionCounted = sessionStorage.getItem('jbmr_visit_counted');
    
    if (!snap.exists()) {
      await setDoc(statsRef, { totalVisits: 50, activeUsers: 1 });
      sessionStorage.setItem('jbmr_visit_counted', 'true');
      return 50;
    } else {
      let currentVisits = snap.data().totalVisits || 50;
      if (currentVisits < 50) currentVisits = 50; // Ensure it starts from at least 50
      
      if (!sessionCounted) {
        currentVisits += 1;
        await updateDoc(statsRef, { totalVisits: increment(1) });
        sessionStorage.setItem('jbmr_visit_counted', 'true');
      }
      return currentVisits;
    }
  } catch (err) {
    console.error('Error updating total visits in Firestore:', err);
    // Fallback to localStorage if offline/error
    const stored = localStorage.getItem('jbmr_total_visits');
    let val = stored ? parseInt(stored, 10) : 50;
    if (!sessionStorage.getItem('jbmr_visit_counted')) {
      val += 1;
      localStorage.setItem('jbmr_total_visits', val.toString());
      sessionStorage.setItem('jbmr_visit_counted', 'true');
    }
    return val;
  }
}
