import { FunctionComponent } from "react"
import Head from 'next/head'
import { getFirebase } from "@helpers/firebase"

const SignIn: FunctionComponent = () => {
	const signInWithGoogle = (e) => {
		const firebase = getFirebase()
		e.preventDefault()
		const auth = firebase.auth()!;
		const db = firebase.firestore();
			
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider).then(async () => {
			const docRef = db.collection('VoteSession').doc(auth.currentUser!.uid)
	
			const docSnapshot = (await docRef.get()).data()
	
			if (!docSnapshot) {
				await docRef.set({type: "google", vote: []})
			}
			
			window.location.replace('vote?id=' + auth.currentUser!.uid);
		})
	}

	return (
		<>
			<Head>
				<title>The 5th Stupid H@ck Thailand</title>
			</Head>
			<button className="google-signin" onClick={signInWithGoogle}>Sign in</button>
		</>
	);
}

export default SignIn;
