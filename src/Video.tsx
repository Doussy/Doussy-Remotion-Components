import { Composition } from 'remotion';
import { YoutubeSubscribe } from '../Compositions/YoutubeSubscribe/YoutubeSubscribe';

export const RemotionVideo: React.FC = () => {
	const HighResolutionWidth = 3840 // 4k
	const HighResolutionHeight = 2160 // 4k

	const Fps = 30

	return (
		<>
			<Composition
				id="Youtube-Subscribe"
				component={YoutubeSubscribe}
				durationInFrames={120}
				fps={Fps}
				width={HighResolutionWidth}
				height={HighResolutionHeight}
			/>
		</>
	);
};
