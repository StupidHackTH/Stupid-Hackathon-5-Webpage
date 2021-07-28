
const cert = {
	projectId: process.env.PROJECT_ID || "",
	privateKey: process.env.PRIVATE_ID?.replace(/\\n/g, '\n') || "",
	clientEmail: process.env.CLIENT_EMAIL || "",
};

export default cert;