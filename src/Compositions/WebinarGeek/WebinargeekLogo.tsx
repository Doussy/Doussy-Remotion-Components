import { Img } from 'remotion'

export const WebinargeekLogo: React.FC = () => {

	return (
		<Img
			src={require('./logo.png')}
			style={{
				width: '90%',
			}}
		/>
	);
};
