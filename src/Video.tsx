import { Composition } from 'remotion'
import { YoutubeSubscribe } from './Compositions/YoutubeSubscribe/YoutubeSubscribe'
import { TextOverlay } from './Compositions/TextOverlay/TextOverlay'

export const RemotionVideo: React.FC = () => {
	const highResolutionWidth = 3840 // 4k
	const highResolutionHeight = 2160 // 4k

	const fps = 30

	return (
		<>
			<Composition
				id="Youtube-Subscribe"
				component={YoutubeSubscribe}
				durationInFrames={4 * fps}
				fps={fps}
				width={highResolutionWidth}
				height={highResolutionHeight}
			/>
			<Composition
				id="Text-Overlay"
				component={TextOverlay}
				durationInFrames={4 * fps}
				fps={fps}
				width={highResolutionWidth}
				height={highResolutionHeight}
			/>
		</>
	);
};
