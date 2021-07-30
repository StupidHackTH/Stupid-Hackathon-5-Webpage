import { BlockLayout, Project } from '@components/Shared';
import { ProjectViewComponent, Project as ProjectType } from "@types";

const Submissions: ProjectViewComponent = ({ teams, variant }) => {
  let projects: ProjectType[] = []

	teams.forEach((t) => {
    if (!t.projects) return
		t.projects.forEach((p) => {
			projects.push({
				color: t.color,
				teamname: t.name,
				name: p.name,
				description: p.description,
				link: p.link,
				members: t.members
			})
		})
	})

	const submissions = projects.map((t) => <Project members={t.members} key={t.name} name={t.name} color={t.color} description={t.description} teamname={t.teamname} link={t.link} />)
  
  return (
    <>
      <BlockLayout header="Submissions" variant={variant} id="submissions">
        {submissions}
      </BlockLayout>
    </>
  );
}

export default Submissions;