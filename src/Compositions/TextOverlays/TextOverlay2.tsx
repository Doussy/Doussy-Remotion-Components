import { Sequence } from 'remotion'

export const TextOverlay2: React.FC = () => {

	const Text = 'Place your text here'

	return (
		<div style={{
			flex: 1,
			backgroundColor: 'green',
			color: 'white',
			fontFamily: 'arial',
			fontSize: '7em',
		}}
		>
			<div style={{
				position: 'absolute',
				top: '80%',
				left: '10%',
				backgroundColor: 'black',
				padding: '0.3em',
				borderRadius: '30px',
			}}>
				{Text.split('').map((letter, index) => (
					<Sequence from={index * 5 + 20} layout="none" name={letter} >
						<span style={{
						}}>
							{letter}
						</span>
					</Sequence>
				))}
			</div>
		</div>
	);
};
