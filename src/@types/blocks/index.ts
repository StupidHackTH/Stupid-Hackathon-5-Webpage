import { FunctionComponent } from "react";
import { Team, Project, RawVotingTeam } from "../team";

type SectionProps = {
	variant?: number
}

export type SectionComponent = FunctionComponent<SectionProps>

export type TextBox = {
    variant: string
}

export type TextComponent = FunctionComponent<TextBox>

export type BlockLayout = {
	header: string,
	variant: number,
	id: string
}

export type BlockComponent = FunctionComponent<BlockLayout>

export type ToggleBlock = {
	title: string,
	content: string,
	flag: string
}

export type ToggleComponent = FunctionComponent<ToggleBlock>

export type StatusBlock = {
	title: string,
	current: number,
	max: number,
	desc: string
}

export type StatusComponent = FunctionComponent<StatusBlock>

export type TeamProps = SectionProps & {
	submissions: Project[]
}

export type HomeComponent = FunctionComponent<TeamProps>

// Project

type ProjectProps = Project & {
	hidden?: boolean
}

export type ProjectComponent = FunctionComponent<ProjectProps>

type ViewProps = TeamProps & {
	variant?: number
}
export type ProjectViewComponent = FunctionComponent<ViewProps>

type VoteProps = {
	teams: RawVotingTeam[]
}

export type VoteComponent = FunctionComponent<VoteProps>