import { Composition } from 'remotion'
import { YoutubeSubscribe } from './Compositions/YoutubeSubscribe/YoutubeSubscribe'
import { TextOverlay1, TextOverlay2 } from './Compositions/TextOverlays'

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
				id="Text-Overlay-1"
				component={TextOverlay1}
				durationInFrames={4 * fps}
				fps={fps}
				width={highResolutionWidth}
				height={highResolutionHeight}
			/>
			<Composition
				id="Text-Overlay-2"
				component={TextOverlay2}
				durationInFrames={5 * fps}
				fps={fps}
				width={highResolutionWidth}
				height={highResolutionHeight}
			/>
		</>
	);
};
