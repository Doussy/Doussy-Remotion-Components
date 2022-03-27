import { Button } from '../../components/Button'
import { ContainerTopRight } from '../../components/ContainerTopRight';
import { ProfileImage } from '../../components/ProfileImage';

export const ButtonBellClicked: React.FC = () => {

	return (
		<ContainerTopRight>
			<ProfileImage />
			<Button text='SUBSCRIBED' backgroundColor='#aaa' />
			<svg
				viewBox="0 0 24 24"
				style={{
					display: 'block',
					width: '190px',
					height: '190px',
					alignSelf: 'center',
					marginLeft: '50px',
					borderRadius: '50%',
				}}
			>
				<g>
					<path
						d="M21.5 8.99992H19.5V8.80992C19.5 6.89992 18.39 5.18991 16.6 4.32991L17.47 2.52991C19.96 3.71991 21.5 6.12992 21.5 8.80992V8.99992ZM4.5 8.80992C4.5 6.89992 5.61 5.18991 7.4 4.32991L6.53 2.52991C4.04 3.71991 2.5 6.12992 2.5 8.80992V8.99992H4.5V8.80992ZM12 21.9999C13.1 21.9999 14 21.0999 14 19.9999H10C10 21.0999 10.9 21.9999 12 21.9999ZM20 17.3499V18.9999H4V17.3499L6 15.4699V10.3199C6 7.39991 7.56 5.09992 10 4.33992V3.95991C10 2.53991 11.49 1.45991 12.99 2.19991C13.64 2.51991 14 3.22991 14 3.95991V4.34991C16.44 5.09991 18 7.40991 18 10.3299V15.4799L20 17.3499Z"
					/>
				</g>
			</svg>
		</ContainerTopRight>
	);
};
