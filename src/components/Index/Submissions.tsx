import { BlockLayout, Project } from '@components/Shared'
import { ProjectViewComponent, Project as ProjectType } from '@types'

const Submissions: ProjectViewComponent = ({ teams, variant }) => {
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
                id: t.id + '-' + i,
            })
        })
    })

    const submissions = projects.map((t) => (
        <Project
            id={t.id}
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

    return (
        <>
            <BlockLayout
                header="Submissions"
                variant={variant || 0}
                id="submissions"
            >
                {submissions}
            </BlockLayout>
        </>
    )
}

export default Submissions
