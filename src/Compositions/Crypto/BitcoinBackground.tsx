import { interpolate, useVideoConfig } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { MovingIcons } from './MovingIcons';

export const BitcoinBackground: React.FC = () => {
	const frame = useCurrentFrame()
	const { durationInFrames } = useVideoConfig();

	const n = 50
	const top = interpolate(frame, [0, durationInFrames], [0, durationInFrames * 4]);

	return (
		<div style={{
			flex: 1,
			display: 'flex',
			flexDirection: 'row',
			backgroundColor: 'green',
			justifyContent: 'center',
			alignItems: 'center',
		}}
		>
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
			<MovingIcons direction="down" />
			<MovingIcons direction="up" />
		</div>
	);
};
