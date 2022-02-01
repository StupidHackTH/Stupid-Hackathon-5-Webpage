export type Project = {
	color: string,
	teamname: string,
	name: string,
	description: string,
	link?: string,
	members: string[]
	id?: string,
	hidden?: boolean
}

export type ProjectInfo = {
	name: string,
	description: string,
	link: string
	id: string
}

export type Team = {
	color: string,
	members: string[],
	name: string,
	projects?: ProjectInfo[]
	id?: string
}

export type VotingTeam = ProjectInfo & {
    color: string,
	members: string[],
	teamname: string
}

export type RawVotingTeam = {
    color: string,
	members: string[],
	teamname: string,
	project: ProjectInfo
}