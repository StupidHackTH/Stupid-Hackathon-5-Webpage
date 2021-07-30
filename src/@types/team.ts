export type Project = {
	color: string,
	teamname: string,
	name: string,
	description: string,
	link: string,
	members: string[]
}

export type ProjectInfo = {
	name: string,
	description: string,
	link: string
}

export type Team = {
	color: string,
	members: string[],
	name: string,
	projects?: ProjectInfo[]
}