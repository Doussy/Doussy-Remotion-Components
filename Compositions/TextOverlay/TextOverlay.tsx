import { interpolate, spring, useVideoConfig } from 'remotion'
import { Sequence, useCurrentFrame } from 'remotion'

export const TextOverlay: React.FC = () => {
	const frame = useCurrentFrame()
	const { fps, durationInFrames } = useVideoConfig()
	const durationInSeconds = durationInFrames / fps

	const fadeOut = interpolate(
		frame,
		[(durationInSeconds - 1) * fps, durationInFrames], // [start frame, end frame]
		[1, 0], // [start opacity, end opacity]
	)

	const TopText = 'Top Text'
	const BottomText = 'Bottom Text'

	return (
		<div style={{
			flex: 1,
			backgroundColor: 'green',
			textAlign: 'center',
			color: 'white',
			fontFamily: 'arial',
		}}
		>
			<div style={{
				opacity: fadeOut,
			}}>
				<Sequence from={0}>
					<div
						style={{
							fontSize: '30em',
							width: '100%',
							alignSelf: 'center',
							transform: `scale(${spring({
								fps: fps,
								frame: frame * 20,
								config: {
									damping: 100,
									stiffness: 50,
									mass: 100,
								},
							})}) translateY(-60%)`,
						}}>
						{TopText}
					</div>
				</Sequence>
				<Sequence from={20}>
					<div
						style={{
							width: '80%',
							alignSelf: 'center',
							borderBottom: '20px solid white',
							marginLeft: 'auto',
							marginRight: 'auto',
						}} />
				</Sequence>
				<Sequence from={30}>
					<div
						style={{
							fontSize: '30em',
							width: '100%',
							alignSelf: 'center',
							transform: `scale(${spring({
								fps: fps,
								frame: (frame - 30) * 20,
								config: {
									damping: 100,
									stiffness: 50,
									mass: 100,
								},
							})}) translateY(50%)`,
						}}>
						{BottomText}
					</div>
				</Sequence>
			</div>
		</div>
	);
};
