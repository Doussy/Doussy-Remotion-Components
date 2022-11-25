import { Composition, Folder } from 'remotion'
import { BitcoinBackground } from './Compositions/Visuals/Crypto/BitcoinBackground'
import { YoutubeSubscribe1 } from './Compositions/Youtube/YoutubeSubscribe1'
import { YoutubeSubscribe2 } from './Compositions/Youtube/YoutubeSubscribe2'
import { TextOverlay1, TextOverlay2 } from './Compositions/TextOverlays'
import { LogoIntro } from './Compositions/WebinarGeek/LogoIntro'
import { WebinarsHosted } from './Compositions/WebinarGeek/WebinarsHosted'
import { FullComposition } from './Compositions/WebinarGeek/FullComposition'
import { TotalRegistrations } from './Compositions/WebinarGeek/TotalRegistrations'

export const RemotionVideo: React.FC = () => {
	// 4k Landscape
	const highResolutionWidth = 3840
	const highResolutionHeight = 2160

	// 1080 Horizonal
	const horizontalWidth = 1080
	const horizontalHeight = 1920

	const fps = 30

	return (
		<>
			<Folder name="Visuals">
				<Composition
					id="Bitcoin-Background"
					component={BitcoinBackground}
					durationInFrames={10 * fps}
					fps={fps}
					width={highResolutionWidth}
					height={highResolutionHeight}
				/>
			</Folder>

			<Folder name="Youtube">
				<Composition
					id="Youtube-Subscribe-1"
					component={YoutubeSubscribe1}
					durationInFrames={4 * fps}
					fps={fps}
					width={highResolutionWidth}
					height={highResolutionHeight}
				/>
				<Composition
					id="Youtube-Subscribe-2"
					component={YoutubeSubscribe2}
					durationInFrames={4 * fps}
					fps={fps}
					width={highResolutionWidth}
					height={highResolutionHeight}
				/>
			</Folder>

			<Folder name="Text-Overlays">
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
					durationInFrames={6 * fps}
					fps={fps}
					width={highResolutionWidth}
					height={highResolutionHeight}
				/>
			</Folder>

			<Folder name="WebinarGeek">
				<Composition
					id="Logo-Intro"
					component={LogoIntro}
					durationInFrames={2 * fps}
					fps={fps}
					width={horizontalWidth}
					height={horizontalHeight}
				/>
				<Composition
					id="Webinars-Hosted"
					component={WebinarsHosted}
					durationInFrames={3 * fps}
					fps={fps}
					width={horizontalWidth}
					height={horizontalHeight}
				/>
				<Composition
					id="Total-Registrations"
					component={TotalRegistrations}
					durationInFrames={3 * fps}
					fps={fps}
					width={horizontalWidth}
					height={horizontalHeight}
				/>
				<Composition
					id="WebinarGeek"
					component={FullComposition}
					durationInFrames={19 * fps}
					fps={fps}
					width={horizontalWidth}
					height={horizontalHeight}
				/>
			</Folder>
		</>
	)
}
