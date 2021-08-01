import __firebase from 'firebase'

let _firebase: any

export function getFirebase (): typeof __firebase {
	if (_firebase) {
		return _firebase
	}
	const firebaseConfig = {
		apiKey: "AIzaSyAXOlKvl4dCdfNPs7-ESbwLA7918tHgG1k",
		authDomain: "stupid-reference-code.firebaseapp.com",
		databaseURL: "https://stupid-reference-code-default-rtdb.asia-southeast1.firebasedatabase.app",
		projectId: "stupid-reference-code",
		storageBucket: "stupid-reference-code.appspot.com",
		messagingSenderId: "749205312711",
		appId: "1:749205312711:web:300b7bdd185a002e1a9ae2",
		measurementId: "G-5NCC8DLM1L"
	};
	// Initialize Firebase
	__firebase.initializeApp(firebaseConfig);
	_firebase = __firebase
	return _firebase
}