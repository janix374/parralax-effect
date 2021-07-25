import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA_gVnlsJ6I-X0hrxFRXdAG1B5xhJMfeuI',
	authDomain: 'air-ship-blog.firebaseapp.com',
	projectId: 'air-ship-blog',
	storageBucket: 'air-ship-blog.appspot.com',
	messagingSenderId: '1029379020245',
	appId: '1:1029379020245:web:2340111a6fae5f0a7d595c',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
