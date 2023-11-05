import {
	AnimationControls,
	BasicsOfFramerMotion,
	Gestures,
	ScrollBaseAnimation,
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
			{/* <ViewBaseAnimation /> */}
			<ScrollBaseAnimation />
		</div>
	);
}

export default App;
