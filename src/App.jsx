import BasicsOfFramerMotion from './components/BasicsOfFramerMotion';
import Gestures from './components/Gestures';

function App() {
	return (
		<div
			style={{
				minHeight: '100vh',
				backgroundColor: 'gray',
				display: 'grid',
				placeItems: 'center',
			}}>
			{/* <BasicsOfFramerMotion /> */}
			<Gestures />
		</div>
	);
}

export default App;
