import {
	AnimationControls,
	BasicsOfFramerMotion,
	Gestures,
} from './components';

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
			{/* <Gestures /> */}
			<AnimationControls />
		</div>
	);
}

export default App;
