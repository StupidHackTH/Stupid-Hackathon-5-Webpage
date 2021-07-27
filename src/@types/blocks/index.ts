import { ReactNode, FunctionComponent } from "react";

export type TextBox = {
    variant: string
}

export type TextComponent = FunctionComponent<TextBox>

export type BlockLayout = {
	header: string,
	variant: string,
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