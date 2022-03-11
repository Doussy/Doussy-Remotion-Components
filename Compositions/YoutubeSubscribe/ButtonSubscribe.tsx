import { Button } from '../../src/components/Button'
import { ContainerTopRight } from '../../src/components/ContainerTopRight'
import { ProfileImage } from '../../src/components/ProfileImage'

export const ButtonSubscribe: React.FC = () => {

	return (
		<ContainerTopRight>
			<ProfileImage />
			<Button text='SUBSCRIBE' backgroundColor='#cc0000' />
		</ContainerTopRight>
	);
};
