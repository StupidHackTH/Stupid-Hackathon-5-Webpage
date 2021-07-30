import Image from 'next/image';
import { BlockLayout } from "@components/Shared";
import { SectionComponent } from '@types';

const Agenda: SectionComponent = ({ variant }) => {
	return (
		<BlockLayout header="Agenda" variant={variant} id="agenda">
			<div className="agenda-container">
				<Image src="/agenda.png" alt="agenda" layout="fill" className="agenda-img" />
			</div>
		</BlockLayout>
	);
}

export default Agenda;