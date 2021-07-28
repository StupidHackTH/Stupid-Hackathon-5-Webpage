
const cert = {
	project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
	private_key: process.env.NEXT_PUBLIC_PRIVATE_ID?.replace(/\\n/g, '\n'),
	client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
};

export default cert;