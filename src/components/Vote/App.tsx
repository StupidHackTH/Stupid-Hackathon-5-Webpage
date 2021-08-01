import { Project as ProjectType, VoteComponent, VotingTeam, RawVotingTeam, ProjectInfo, ProjectComponent } from '@types'
import { FunctionComponent, useEffect, useState } from 'react'
import { Project } from "@components/Shared";

const parseTeams = (teams: RawVotingTeam[]): VotingTeam[] => {
    let projects: VotingTeam[] = []

    teams.forEach((t) => {
        if (!t.project) return
        projects.push({
            color: t.color,
            teamname: t.teamname,
            name: t.project.name,
            description: t.project.description,
            link: t.project.link,
            members: t.members
        })
    })

    return projects
}

const toCard = (teams: VotingTeam[]) => {
    return teams.map((t) => (
        <Project
            members={t.members}
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            link={t.link}
        />
    ))
}

const App: VoteComponent = ({ teams }) => {
	const [currTeam, setCurrTeam] = useState<VotingTeam[]>();
	const [prevTeams, setPrevTeams] = useState<VotingTeam[]>();
	const [afterTeams, setAfterTeams] = useState<VotingTeam[]>();
	const [selectedTeams, setSelectedTeams] = useState<VotingTeam[]>();

	useEffect(() => {
        if (teams.length === 0) return;
        let remTeams = Array.from(parseTeams(teams))

        setSelectedTeams(remTeams.splice(0, 4))
        setCurrTeam(remTeams.splice(0,1))
        setPrevTeams(remTeams)

	}, [teams])

    if (teams.length === 0) return <></>;

    return (
        <>
            <div className="selected">{selectedTeams ? toCard(selectedTeams) : <></>}</div>
            <div className="previous">{prevTeams ? toCard(prevTeams) : <></>}</div>
            <div className="current">{currTeam ? toCard(currTeam) : <></>}</div>
            <div className="after">{afterTeams ? toCard(afterTeams) : <></>}</div>
            <div className="back">
				<a className="btn -gold">submit</a>
			</div>
        </>
    )
}

export default App
