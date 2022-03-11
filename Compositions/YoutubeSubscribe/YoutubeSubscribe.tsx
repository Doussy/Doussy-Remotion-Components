import { spring } from 'remotion'
import { Sequence, useCurrentFrame } from 'remotion';
import { ButtonBell } from './ButtonBell';
import { ButtonBellClicked } from './ButtonBellClicked';
import { ButtonSubscribe } from './ButtonSubscribe';
import { HandPointerMovement } from './HandPointerMovement';

export const YoutubeSubscribe: React.FC = () => {
  const frame = useCurrentFrame();
  
return (
	<div style={{
      flex: 1,
      backgroundColor: 'green',
	}}
	>
		<div style={{ 
      transform: `scale(${spring({
        fps: 30,
        frame: frame * 20,
        config: {
          damping: 100,
          stiffness: 50,
          mass: 100,
        },
      })})`,
		}}
		>
			<Sequence from={0} durationInFrames={50}>
				<ButtonSubscribe />
			</Sequence>
			<Sequence from={50} durationInFrames={35}>
				<ButtonBell/>
			</Sequence>
			<Sequence from={85}>
				<ButtonBellClicked/>
			</Sequence>
		</div>


		{/* Hand Pointer Movement */}
		<>
			<Sequence from={0} durationInFrames={55}>
				<HandPointerMovement startLeft={2100} endLeft={3100} startTop={1000} endTop={300} />
			</Sequence>
			<Sequence from={55}>
				<HandPointerMovement startLeft={3100} endLeft={3400} startTop={300} endTop={300} />
			</Sequence>
		</>
	</div>
);
};
