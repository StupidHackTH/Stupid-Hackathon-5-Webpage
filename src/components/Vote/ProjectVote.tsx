import { Project as ProjectType } from "@types";
import { FormEvent, FunctionComponent } from "react";

function getTextColor(color: string){
	const colorCode = color.length === 3 ? color.split("").map((e)=>e+e).join("") : color

	const [a, b, c] = colorCode.matchAll(/[0-9a-fA-F]{2}/ig);
  
	if ((parseInt(a,16) + parseInt(b,16) + parseInt(c,16))/3 > 127) {
	  return 1
	} else {
	  return 2
	}
}

type VoteViewProps = ProjectType & {
	hidden?: boolean,
}

const ProjectVote: FunctionComponent<VoteViewProps> = ({ color, teamname, name, description, link, members, hidden }) => {
	const colorCode = (color.length === 6 || color.length === 3) ? `#${color}` : color;
	const type = getTextColor(color);

	const _hidden = hidden ?? true;

	const re = /\S/g;
	const _name = _hidden ? name.replace(re, '█') : name;
	const _description = _hidden ? description.replace(re, '█') : description;	

	let video_id;
	if (link?.includes('watch?v=')) {
		video_id = link?.split('v=')[1]
	} else if (link?.includes('youtu.be')) {
		video_id = link?.split('youtu.be')[1].split("").filter((c)=>c!=='/').join("")
	}

	const _link = _hidden ? `https://www.youtube.com/embed/${video_id?.replace(re, '█')}` : `https://www.youtube.com/embed/${video_id}`;
	
	return (
		<>
			<div className={`vote-card -v${type}`} style={{backgroundColor: colorCode}} id={_name}>
				<h2 className="name">{_name}</h2>
				<div className="team-info">
					<h3 className="teamname"><span className="label">Team Name</span>{teamname}</h3>
					<p className="members"><span className="label">Members</span>{members.join(", ")}</p>
				</div>
				<hr className="separator" />
				<p className="description">{_description}</p>
				{ link ?
				<div className="video-container">
					<iframe width="560" height="315"
						src={_link}
						title={_name}
						className="video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					>	
					</iframe>
				</div>
				: <></>
				}
			</div>
		</>
	);
}

type CompactProps = {
	name: string,
	teamname: string,
	description: string,
	color: string,
	onClick: (e: FormEvent<Element>) => void
}

export const CompactCard: FunctionComponent<CompactProps> = ({ name, teamname, description, color, onClick }) => {
	const colorCode = (color.length === 6 || color.length === 3) ? `#${color}` : color;
	const type = getTextColor(color);

	return (
		<>
			<div className={`vote-card -v${type} -compact`}
				style={{backgroundColor: colorCode}} id={name}
				onClick={(e: FormEvent) => onClick(e)}
			>
				<h2 className="name">{name}</h2>
				<div className="team-info">
					<h3 className="teamname">by {teamname}</h3>
				</div>
				<hr className="separator" />
				<p className="description">{description}</p>
			</div>
		</>
	);
}

export default ProjectVote;