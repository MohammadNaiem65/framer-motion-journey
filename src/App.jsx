import {
	AnimationControls,
	BasicsOfFramerMotion,
	Gestures,
	ViewBaseAnimation,
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
			{/* <AnimationControls /> */}
			<ViewBaseAnimation />
		</div>
	);
}

export default App;
