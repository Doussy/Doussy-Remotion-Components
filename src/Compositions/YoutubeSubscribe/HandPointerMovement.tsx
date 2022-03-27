import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'
import { HandPointer } from '../../components/HandPointer'

type Props = {
	startLeft: number,
	startTop: number,
	endLeft: number,
	endTop: number,
}

export const HandPointerMovement: React.FC<Props> = ({ startLeft, startTop, endLeft, endTop }) => {
	const frame = useCurrentFrame();

	const left = interpolate(frame, [0, 10], [startLeft, endLeft], {
		extrapolateRight: "clamp",
	});
	const top = interpolate(frame, [0, 10], [startTop, endTop], {
		extrapolateRight: "clamp",
	});

	return (
		<div
			style={{
				position: 'absolute',
				top: `${top}px`,
				left: `${left}px`,
				width: '190px',
			}}
		>
			<HandPointer />
		</div>
	);
};
