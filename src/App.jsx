import {
	AnimationControls,
	BasicsOfFramerMotion,
	Gestures,
	HorizontalScrollCarousel,
	ScrollBaseAnimation,
	ViewBaseAnimation,
} from './components';

function App() {
	return (
		// <div
		// 	style={{
		// 		minHeight: '100vh',
		// 		backgroundColor: 'gray',
		// 		display: 'grid',
		// 		placeItems: 'center',
		// 	}}>
		// 	{/* <BasicsOfFramerMotion /> */}
		// 	{/* <Gestures /> */}
		// 	{/* <AnimationControls /> */}
		// 	{/* <ViewBaseAnimation /> */}
		// 	{/* <ScrollBaseAnimation /> */}
		// </div>

		<div className='bg-neutral-800'>
			<div className='flex h-48 items-center justify-center'>
				<span className='font-semibold uppercase text-neutral-500'>
					Scroll down
				</span>
			</div>
			<HorizontalScrollCarousel />
			<div className='flex h-48 items-center justify-center'>
				<span className='font-semibold uppercase text-neutral-500'>
					Scroll up
				</span>
			</div>
		</div>
	);
}

export default App;
