import { FunctionComponent } from "react";
import Image from 'next/image';
import { BlockLayout } from "@components/Shared";

const Agenda: FunctionComponent = () => {
	return (
		<BlockLayout header="Agenda" variant="1" id="agenda">
			<div className="agenda-container">
				<Image src="/agenda.png" alt="agenda" layout="fill" className="agenda-img" />
			</div>
		</BlockLayout>
	);
}

export default Agenda;