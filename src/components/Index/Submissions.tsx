import { BlockLayout, Project } from '@components/Shared'
import { ProjectViewComponent, Project as ProjectType } from '@types'

const Submissions: ProjectViewComponent = ({ submissions, variant }) => {
    /*
    if (teams.length === 0)
        return (
            <BlockLayout
                header="Submissions"
                variant={variant}
                id="submissions"
            ></BlockLayout>
        )

    let projects: ProjectType[] = []

    teams.forEach((t) => {
        if (!t.projects) return
        t.projects.forEach((p, i) => {
            projects.push({
                color: t.color,
                teamname: t.name,
                name: p.name,
                description: p.description,
                link: p.link,
                members: t.members,
                id: p.id,
            })
        })
    })
    */

    // teams is now submissions

    const _submissions = submissions.map((s) => (
        <Project
            id={s.id}
            members={s.members}
            key={s.name}
            name={s.name}
            color={s.color}
            description={s.description}
            teamname={s.teamname}
            link={s.link}
            hidden={s.hidden}
        />
    ))

    return (
        <>
            <BlockLayout
                header="Submissions"
                variant={variant || 0}
                id="submissions"
            >
                {_submissions}
            </BlockLayout>
        </>
    )
}

export default Submissions
