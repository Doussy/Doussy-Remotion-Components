import { spring } from 'remotion'
import { useCurrentFrame } from 'remotion';

export const MinutesWatched: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: '#8109d6',
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
				Your viewers watched a total of 3000 minutes of your webinars.
			</div>
		</div>
	)
};
