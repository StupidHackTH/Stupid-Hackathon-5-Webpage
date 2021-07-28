
const cert = {
	project_id: process.env.PROJECT_ID || "",
	privateKey: process.env.PRIVATE_ID?.replace(/\\n/g, '\n') || "",
	client_email: process.env.CLIENT_EMAIL || "",
};

export default cert;