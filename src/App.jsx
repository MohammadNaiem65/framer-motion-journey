import {
	AdvancedAnimation,
	AnimationControls,
	BasicsOfFramerMotion,
	Gestures,
	HorizontalScrollCarousel,
	MultiStepCard,
	ScrollBaseAnimation,
	ViewBaseAnimation,
} from './components';

function App() {
	return (
		<div className='min-h-screen bg-neutral-800 grid place-items-center'>
			{/* <BasicsOfFramerMotion /> */}
			{/* <Gestures /> */}
			{/* <AnimationControls /> */}
			{/* <ViewBaseAnimation /> */}
			{/* <ScrollBaseAnimation /> */}
			{/* <AdvancedAnimation /> */}
			<MultiStepCard />
		</div>

		// <div className='bg-neutral-800'>
		// 	<div className='flex h-48 items-center justify-center'>
		// 		<span className='font-semibold uppercase text-neutral-500'>
		// 			Scroll down
		// 		</span>
		// 	</div>
		// 	<HorizontalScrollCarousel />
		// 	<div className='flex h-48 items-center justify-center'>
		// 		<span className='font-semibold uppercase text-neutral-500'>
		// 			Scroll up
		// 		</span>
		// 	</div>
		// </div>
	);
}

export default App;
