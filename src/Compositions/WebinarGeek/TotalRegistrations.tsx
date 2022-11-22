import { spring } from 'remotion'
import { useCurrentFrame } from 'remotion';

export const TotalRegistrations: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: '#d66f09',
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
				Your had a total of 3456 registrations for your webinars.
			</div>
		</div>
	)
};
