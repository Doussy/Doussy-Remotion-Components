import React from 'react';
import {Sequence} from 'remotion';
import {LogoIntro} from './LogoIntro';
import { MinutesWatched } from './MinutesWatched';
import { TotalRegistrations } from './TotalRegistrations';
import {WebinarsHosted} from './WebinarsHosted';

export const FullComposition: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={60}>
				<LogoIntro />
			</Sequence>
			<Sequence from={60} durationInFrames={90}>
				<WebinarsHosted />
			</Sequence>
			<Sequence from={150} durationInFrames={90}>
				<MinutesWatched  />
			</Sequence>
			<Sequence from={240} durationInFrames={90}>
				<TotalRegistrations />
			</Sequence>
		</>
	);
};
