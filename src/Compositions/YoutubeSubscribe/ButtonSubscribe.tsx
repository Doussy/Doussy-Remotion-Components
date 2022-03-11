import { Button } from '../../components/Button'
import { ContainerTopRight } from '../../components/ContainerTopRight'
import { ProfileImage } from '../../components/ProfileImage'

export const ButtonSubscribe: React.FC = () => {

	return (
		<ContainerTopRight>
			<ProfileImage />
			<Button text='SUBSCRIBE' backgroundColor='#cc0000' />
		</ContainerTopRight>
	);
};
