import {Composition} from 'remotion';
import { YoutubeSubscribe } from './YoutubeSubscribe/YoutubeSubscribe';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Youtube-Subscribe"
				component={YoutubeSubscribe}
				durationInFrames={120}
				fps={30}
				width={3840} // 4k
				height={2160} // 4k
			/>
		</>
	);
};
