import { useState } from 'react';

export default function MultiStepCard() {
	const [currStep, setCurrStep] = useState(1);

	return (
		<div className='h-[26rem] w-2/5 bg-white rounded'>
			{/* Steps */}
			<div className='flex justify-evenly mt-5'>
				<Step step={1} currStep={currStep} />
				<Step step={2} currStep={currStep} />
				<Step step={3} currStep={currStep} />
				<Step step={4} currStep={currStep} />
			</div>

			{/* Skeleton */}
			<div className='px-16 mt-10'>
				<div className='h-14 w-3/4 bg-neutral-200 animate-pulse rounded' />
				<div className='h-7 w-[88%] mt-6 bg-neutral-200 animate-pulse rounded' />
				<div className='h-7 w-full mt-2 bg-neutral-200 animate-pulse rounded' />
				<div className='h-7 w-[70%] mt-2 bg-neutral-200 animate-pulse rounded' />
			</div>

			{/* Buttons */}
			<div className='px-16 flex justify-between mt-10'>
				<button className='font-semibold text-xl text-gray-600'>
					Back
				</button>
				<button className='px-8 py-2 font-semibold text-xl text-white bg-blue-400 rounded   '>
					Next
				</button>
			</div>
		</div>
	);
}

function Step({ step, currStep }) {
	return (
		<span
			className={`w-16 h-16 text-3xl border-[3px] grid place-items-center rounded-full ${
				currStep === step
					? 'text-blue-300 border-blue-300'
					: currStep > step
					? 'border-gray-600'
					: 'text-gray-300 border-gray-300'
			}`}>
			{currStep > step ? '✔️' : step}
		</span>
	);
}
