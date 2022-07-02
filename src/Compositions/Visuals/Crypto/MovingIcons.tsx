import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { BitcoinIcon } from './BitcoinIcon';

type Props = {
	direction: 'up' | 'down'
}
export const MovingIcons: React.FC<Props> = ({ direction }) => {
	const frame = useCurrentFrame()

	const n = 50
	const top = interpolate(frame, [0, 300], [0, 1000]);

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			marginTop: direction === "up" ? `${top}px` : `-${top}px`,
		}}>
			{[...Array(n)].map((e, i) => <div style={{ margin: '30px' }}><BitcoinIcon /></div>)}
		</div>
	);
};
