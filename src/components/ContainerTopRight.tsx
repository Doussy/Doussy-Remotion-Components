export const ContainerTopRight: React.FC = ({ children }) => {

  return (
	<div
		style={{
        position: 'absolute',
        right: '150px',
        top: '150px',
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingTop: '100px',
        paddingBottom: '100px',
        backgroundColor: '#ffffff',
        borderRadius: '90px',
        display: 'flex',
		}}
	>
		{children}
	</div>
  );
};
