import { Img } from 'remotion'

export const ProfileImage: React.FC = () => {

	return (
		<Img
			src={require('../../images/profile.jpeg')}
			style={{
				width: '230px',
				height: '230px',
				borderRadius: '50%',
				marginRight: '120px',
			}}
		/>
	);
};
