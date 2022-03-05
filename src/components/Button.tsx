export const Button: React.FC<{ text: string, backgroundColor: string }> = ({ text, backgroundColor }) => {

return (
	<div
		style={{
        backgroundColor,
        fontSize: '7em',
        color: '#ffffff',
        width: 'fit-content',
        paddingLeft: '70px',
        paddingRight: '70px',
        paddingTop: '50px',
        paddingBottom: '50px',
        borderRadius: '10px',
        fontFamily: 'arial',
        alignSelf: 'center',
		}}
	>{text}
	</div>
  )
};
