import admin from "firebase-admin";
import cert from "./certificate";

const initDB = () => {
	console.log("initiating the db...")
	try {
		return admin.firestore();
	} catch {
		admin.initializeApp(!process.env.GOOGLE_APPLICATION_CREDENTIALS ? {
			credential: admin.credential.cert(cert),
		} : {});
		return admin.firestore();
	}
};

export default initDB;