import { FunctionComponent } from "react";
import { Team } from "../team";

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

export type TeamProps = {
	teams: Team[]
}

export type HomeComponent = FunctionComponent<TeamProps>

export type ProjectComponent = FunctionComponent<TeamProps>