import { Project as ProjectType, VoteComponent, VotingTeam, RawVotingTeam, ProjectInfo, ProjectComponent } from '@types'
import { FormEvent, FunctionComponent, useEffect, useState } from 'react'
import { ProjectVote, CompactCard } from "@components/Vote";

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
        <ProjectVote
            members={t.members}
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            link={t.link}
            hidden={false}
        />
    ))
}

const toCompactCard = (teams: VotingTeam[], onClick: (e: FormEvent<Element>) => void) => {
    return teams.map((t, i) => (
        <CompactCard
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            onClick={onClick}
            index={i}
        />
    ))
}

const App: VoteComponent = ({ teams }) => {
	const [currTeam, setCurrTeam] = useState<VotingTeam[]>([]);
	const [prevTeams, setPrevTeams] = useState<VotingTeam[]>([]);
	const [afterTeams, setAfterTeams] = useState<VotingTeam[]>([]);
	const [selectedTeams, setSelectedTeams] = useState<VotingTeam[]>([]);
    const [done, setDone] = useState(false);

	useEffect(() => {
        if (teams.length === 0) return;
        let remTeams = Array.from(parseTeams(teams))

        setSelectedTeams(remTeams.splice(0, 4))
        setCurrTeam(remTeams.splice(0,1))
        setPrevTeams(remTeams)
	}, [teams])

    if (teams.length === 0) return <></>;

    const blankPresentation = () => <ProjectVote
            members={['...', '...']}
            name={'Lorem Ipsum'}
            color={'fcd200'}
            description={"Aliqua mollit magna aliqua labore non. Minim duis labore anim excepteur. Irure eu laborum fugiat proident adipisicing deserunt est velit quis ad ut. Lorem non aute cupidatat cupidatat est. Officia non eu duis adipisicing duis ex officia cupidatat in anim esse ut aliqua in. Adipisicing officia pariatur consequat ex et do tempor. In commodo eu irure laboris commodo id laborum velit."}
            teamname={"..."}
            link={"https://www.youtube.com/watch?v=ho_yYS0YUUw"}
            hidden={true}
        />

    const handleClick = (e: FormEvent) => {
        console.log(e)
    }

    return (
        <>            
            { done ? 
            <>
                <div className="selected">{selectedTeams ? toCard(selectedTeams) : blankPresentation()}</div>
                <div className="buttons">
                    <button className="btn -red">Reset</button>
                    <button className="btn -gold">Submit</button>
                </div>
            </> : <>
                <div className="vote-container">
                    <div className="top">
                        <p className="progress">{afterTeams.length+1}/{teams.length-4}</p>
                        <div className="gallery">
                            <div className="current">
                                {currTeam ? toCard(currTeam): blankPresentation()}
                            </div>
                            <div className="aside">
                                <div className="previous">
                                    {prevTeams ? toCard(prevTeams)[0] : blankPresentation()}
                                </div>
                                <div className="after">
                                    {afterTeams ? toCard(afterTeams)[0] : blankPresentation()}
                                </div>
                            </div>
                        </div>
                        <div className="skip">
                            <button className="btn">{'->'}</button>
                        </div>
                        <div className="back">
                            <button className="btn">{'<-'}</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="selected">
                            {selectedTeams ? toCompactCard(selectedTeams, handleClick) : blankPresentation()}
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default App
