import { ProjectComponent } from "@types";

function invertColor(hex: string, bw: boolean) {
	// https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 145 // threshhold: default = 186
            ? '#322a5d'
            : '#fff5f5';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    // pad each with zeros and return
    return "#" + String(r).padStart(2, '0') + String(g).padStart(2, '0') + String(b).padStart(2, '0');
}

function getColorTheme(color: string) {
	const colorCode = color.length === 3 ? color.split("").map((e)=>e+e).join("") : color
	const [a, b, c] = colorCode.matchAll(/[0-9a-fA-F]{2}/ig);
  
	if (0.299*parseInt(a,16) + 0.587*parseInt(b,16) + 0.114*parseInt(c,16) > 145) { // threshhold: default = 186
	  return 1 // color is light, set everything dark
	} else {
	  return 2 // color is dark, set everything light
	}
}

function getContrastColor(color: string) {
	// mai take on contrasts: convert to hsl and manipulate it lol
	const hex = color.length === 3 ? color.split("").map((e)=>e+e).join("") : color
	
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	
	let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255; // convert rgb to 0-1 values
    let max = Math.max(r, g, b), // max
		min = Math.min(r, g, b); // min
	
    let h, s, l = (max + min) / 2; // light is min + max / 2

	// check if there is a saturation
    if (max == min) {
		// achromatic
        h = s = 0;
    } else {
		// colorful
        let d = max - min; // delta
        s = (l > 0.5) ?
			d / (2 - max - min)
			:
			d / (max + min);
		
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6; // hue mod 6
    }

    s = Math.round(100*s);
    l = Math.round(100*l);
	h = Math.round(360*h);

	// convert to a contrasting color
	let _h = (h + 200) % 360;
	let _s = s;
	let _l = l;

	if (0.3*(r*255) + 0.6*(g*255) + 0.1*(b*255) > 127) {
		// color is light, set everything dark
		_s = (s+20 > 100) ? 100 : s+20
		_l = l
	} else {
		// color is dark, set everything light
		_s = (s+20 > 100) ? 100 : s+20
		_l = (l+20 < 0) ? 100 : l+20
	}

    return `hsl(${_h}deg, ${_s}%, ${_l}%)`;
}

function formatDesc(desc: string, linkColor: string) {
	// replace <br> / <br /> with line breaks
	const urlRe = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
	const breakRe = /<br \/>|<br\/>|<br>/g

	const ret = desc
    	.split(" ")
    	.map((part, i) => {
			const content = breakRe.test(part) ? <>{part.replace(breakRe, "")}<br /></> : <>{part}</>
			return urlRe.test(part) ? <a href={part} style={{color: linkColor, textDecoration: 'underline'}} key={i} target="_blank" rel="noreferrer">{content} </a> : <>{content} </>
		});

	return <>{ret}</>
}

const Project: ProjectComponent = ({ id, color, teamname, name, description, link, members, hidden }) => {
	const colorCode = (color.length === 6 || color.length === 3) ? `#${color}` : color;

	const type = getColorTheme(color);
	const linkColor = invertColor(color, true);

	const _hidden = hidden ?? true;

	const replaceAllRe = /\S/g;
	const _name = _hidden ? name.replace(replaceAllRe, '█') : name;
	
	// description stuff
	let desc = _hidden ? description.replace(replaceAllRe, '█') : description;
	
	const _description = formatDesc(desc, linkColor)

	let video_id = "dQw4w9WgXcQ";
	if (link?.includes('watch?v=')) {
		video_id = link?.split('v=')[1]
	} else if (link?.includes('youtu.be')) {
		video_id = link?.split('youtu.be')[1].split("").filter((c)=>c!=='/').join("")
	}

	// Special case for one project.
	video_id = video_id.replace(/\]/, '')

	const _link = _hidden ? `https://www.youtube.com/embed/${video_id?.replace(replaceAllRe, '█')}` : `https://www.youtube.com/embed/${video_id}`;
	
	return (
		<>
			<div id={id} className={`project-card -v${type}`}
				style={{backgroundColor: colorCode}}
			>
				<h2 className="name">{_name}</h2>
				<div className="team-info">
					<h3 className="teamname"><span className="label">Team Name</span>{teamname}</h3>
					<p className="members"><span className="label">Members</span>{members.join(", ")}</p>
				</div>
				<hr className="separator" />
				<p className="description">{_description}</p>
				{ _link ?
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

export default Project;