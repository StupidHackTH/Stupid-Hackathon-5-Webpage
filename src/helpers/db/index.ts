import admin from "firebase-admin";
import cert from "./certificate";

const initDB = () => {
	try {
		return admin.firestore();
	} catch {
		admin.initializeApp({
			credential: admin.credential.cert(cert),
		});
		return admin.firestore();
	}
};

export default initDB;