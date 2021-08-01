import { Project as ProjectType, VoteComponent, VotingTeam, RawVotingTeam, ProjectInfo, ProjectComponent } from '@types'
import { FormEvent, FunctionComponent, useEffect, useState } from 'react'
import { ProjectVote, CompactCard } from "@components/Vote";
import { getFirebase } from "@helpers/firebase"
import { useRouter } from 'next/router';

const MAX_PROJECTS = 18;

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

const toIndexCard = (teams: VotingTeam[]) => {
    return teams.map((t, i) => (
        <ProjectVote
            members={t.members}
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            link={t.link}
            hidden={false}
            index={i}
        />
    ))
}

type VotingTeamPlus = VotingTeam & {
    template?: boolean
}

const toCompactCard = (teams: VotingTeamPlus[], onClick: (e: FormEvent<Element>, i: number) => void) => {
    return teams.map((t, i) => (
        <CompactCard
            key={t.name}
            name={t.name}
            color={t.color}
            description={t.description}
            teamname={t.teamname}
            onClick={onClick}
            index={i}
            template={t.template}
        />
    ))
}

const App: VoteComponent = ({ teams }) => {
    const template = {
        members: ['...', '...'],
        name: 'Template',
        color: 'fefefe',
        description: "Aliqua mollit magna aliqua labore non. Minim duis labore anim excepteur. Irure eu laborum fugiat proident adipisicing deserunt est velit quis ad ut. Lorem non aute cupidatat cupidatat est. Officia non eu duis adipisicing duis ex officia cupidatat in anim esse ut aliqua in. Adipisicing officia pariatur consequat ex et do tempor. In commodo eu irure laboris commodo id laborum velit.",
        teamname: '...',
        link: 'https://www.youtube.com/watch?v=ho_yYS0YUUw',
        hidden: true,
        template: true
    }

    const router = useRouter();
    const { id } = router.query;

    const [currTeam, setCurrTeam] = useState<VotingTeam>(template);
    const [prevTeams, setPrevTeams] = useState<VotingTeam[]>([]);
    const [afterTeams, setAfterTeams] = useState<VotingTeam[]>([]);
    const [selectedTeams, setSelectedTeams] = useState<VotingTeamPlus[]>([]);
    const [done, setDone] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true)
    }, [])

    useEffect(() => {
        if (teams.length === 0) return;
        const _prevTeams = Array.from(prevTeams)
        const _afterTeams = Array.from(afterTeams)
        const _currTeam = currTeam

        const savedSelected = localStorage.getItem('selected')
        const savedAfter = localStorage.getItem('after')

        console.log(teams)

        // if (savedSelected && savedAfter) {
        //     const _afterTeams = JSON.parse(savedAfter );
        //     const _selectedTeams = JSON.parse(savedSelected);
        //     // set things we already know
        //     setSelectedTeams(_selectedTeams)
        //     setAfterTeams(_afterTeams)

        //     // all teams that aint from the ones above
        //     const rem = parseTeams(teams).filter((t) => !_selectedTeams.includes(t) || !_afterTeams.includes(t))
        //     setPrevTeams(rem.slice(0, rem.length-1))
        //     setCurrTeam(rem[rem.length])
        // } else {
        // set templates for selected
        const templates = Array.from(Array(4).keys()).map(() => template)
        setSelectedTeams(templates)

        let remTeams = Array.from(parseTeams(teams))
        // set curr at the first team
        console.log(remTeams)
        setCurrTeam(remTeams[0])
        console.log(remTeams)
        remTeams.splice(0, 1)
        console.log(remTeams)
        setPrevTeams(remTeams)
        console.log(remTeams)
        // }
    }, [teams])

    // todo pls review logic

    useEffect(() => {
        // teams change
        if (load && prevTeams.length === 0 && teams.length === MAX_PROJECTS) setDone(true)
        else setDone(false)

        setPrevTeams(prevTeams.filter(t => !t.template))
        setAfterTeams(afterTeams.filter(t => !t.template))

        // localStorage.setItem('selected', JSON.stringify(selectedTeams));
        // localStorage.setItem('after', JSON.stringify(afterTeams));

    }, [afterTeams])

    if (teams.length === 0) return <></>;

    const blankPresentation = () => toCard([template])

    const handleSkip = (e: FormEvent) => {
        e.preventDefault()
        if (!prevTeams || prevTeams.length === 0) return;
        // const _selectedTeams = Array.from(selectedTeams)
        const _prevTeams = Array.from(prevTeams)
        const _afterTeams = Array.from(afterTeams)
        const _currTeam = currTeam

        // push old current to first after
        let newAfterTeams = _afterTeams
        newAfterTeams.unshift(_currTeam)
        setAfterTeams(newAfterTeams)

        // change current to last before
        setCurrTeam(_prevTeams[_prevTeams.length - 1])

        // pop out last before
        let newPrevTeams = _prevTeams
        newPrevTeams.pop()
        setPrevTeams(newPrevTeams)
    }

    const handleBack = (e: FormEvent) => {
        e.preventDefault()
        if (!afterTeams || afterTeams.length === 0) return;
        // const _selectedTeams = Array.from(selectedTeams)
        const _prevTeams = Array.from(prevTeams)
        const _afterTeams = Array.from(afterTeams)
        const _currTeam = currTeam

        // push old current to before
        let newPrevTeams = _prevTeams
        newPrevTeams.push(_currTeam)
        setPrevTeams(newPrevTeams)

        // change current to first after
        setCurrTeam(_afterTeams[0])

        // pop first out of after
        let newAfterTeams = _afterTeams
        newAfterTeams.shift()
        setAfterTeams(newAfterTeams)
    }

    const handleSelect = (e: FormEvent, i: number) => {
        const _selectedTeams = Array.from(selectedTeams)
        const _prevTeams = Array.from(prevTeams)
        const _afterTeams = Array.from(afterTeams)
        // const _currTeam = currTeam

        // push old selected item to first after
        let newAfter = _afterTeams
        newAfter.unshift(_selectedTeams[i])
        setAfterTeams(newAfter)

        // change current team to last before
        setCurrTeam(_prevTeams[_prevTeams.length - 1])

        // pop last element out of before
        let newPrevTeams = _prevTeams
        newPrevTeams.pop()
        setPrevTeams(newPrevTeams)

        // change i'th selected team to current team
        let newSelectedTeams = _selectedTeams
        newSelectedTeams[i] = currTeam
        setSelectedTeams(newSelectedTeams)
    }

    const handleReset = (e: FormEvent) => {
        e.preventDefault();
        if (teams.length === 0) return;
        let remTeams = Array.from(parseTeams(teams))

        // set templates for selected
        const templates = Array.from(Array(4).keys()).map(() => template)
        setSelectedTeams(templates)
        // set curr at the first team
        setCurrTeam(remTeams[0])
        remTeams.splice(0, 1)
        setPrevTeams(remTeams)
        setAfterTeams([])

        localStorage.setItem('selected', "");
        localStorage.setItem('after', "");
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let complete = true;
        selectedTeams.forEach((team) => {
            if (team.template) complete = false
        })
        if (!complete) return alert("Please select your votes for every ranking.")

        // submit here
        const firebase = getFirebase()
        const db = firebase.firestore()

        const _id = id || ""
        if (!_id) return
        db.collection("VoteSession")
            .doc(_id)
            .set({
                vote: selectedTeams.map((t) => t.teamname)
            }, { merge: true })
    }

    return (
        <>
            {done ?
                <>
                    <h2 id="choose-vote" className="rank-title">Confirm your Votes</h2>
                    <div className="selected">{selectedTeams ? toIndexCard(selectedTeams) : blankPresentation()}</div>
                    <div className="buttons">
                        <button className="btn -red" onClick={handleReset}>Reset</button>
                        <button className="btn -gold" onClick={handleSubmit}>Submit</button>
                    </div>
                </> : <>
                    <div className="vote-container">
                        <div className="top">
                            <p className="progress">{afterTeams.length + 1}/{teams.length}</p>
                            <div className="helper-buttons">
                                <button className="btn -purple" onClick={handleSkip}>Skip</button>
                                <a className="btn" href="#choose-vote">Vote</a>
                                <button className="btn -purple" onClick={handleBack}>Undo</button>
                            </div>
                            <div className="gallery">
                                <div className="current">
                                    {currTeam ? toCard([currTeam]) : blankPresentation()}
                                </div>
                                <div className="aside">
                                    <div className="previous">
                                        {prevTeams.length !== 0 ? toCard(prevTeams)[0] : <></>}
                                    </div>
                                    <div className="after">
                                        {afterTeams.length !== 0 ? toCard(afterTeams)[0] : <></>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="selected">
                                <h2 id="choose-vote" className="rank-title">Selections</h2>
                                {selectedTeams.length !== 0 ? toCompactCard(selectedTeams, handleSelect) : blankPresentation()}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default App
