export type Project = {
	name: string,
	description: string,
	url: string
}

export type Team = {
	admins: string[],
	color: string,
	members: string[],
	name: string,
	projects?: Project[],
	mainproject?: Project
}