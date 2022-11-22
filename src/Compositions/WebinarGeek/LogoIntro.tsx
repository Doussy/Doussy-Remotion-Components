import { spring } from 'remotion'
import { useCurrentFrame } from 'remotion';
import { WebinargeekLogo } from './WebinargeekLogo';

export const LogoIntro: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'black',
				color: 'white',
				fontSize: '6rem',
			}}>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					textAlign: 'center',
					width: '100%',
					transform: `scale(${spring({
						fps: 30,
						frame: frame * 20,
						config: {
							damping: 50,
							stiffness: 20,
							mass: 50,
						},
					})})
						translateY(-50%)`,
				}}
			>
				<WebinargeekLogo />
			</div>
		</div>
	)
};
