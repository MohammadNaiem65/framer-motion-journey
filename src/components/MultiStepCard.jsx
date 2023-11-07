import { useState } from 'react';
import { motion } from 'framer-motion';
import tickMark from '../assets/check-mark.svg';

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
				<button
					className='font-semibold text-xl text-gray-600'
					onClick={() =>
						currStep > 1 && setCurrStep((prev) => --prev)
					}>
					Back
				</button>
				<motion.button
					className='px-8 py-2 font-semibold text-xl text-white bg-blue-400 rounded-full'
					whileTap={{ scale: 1.05 }}
					onClick={() =>
						currStep < 4 && setCurrStep((prev) => ++prev)
					}>
					Next
				</motion.button>
			</div>
		</div>
	);
}

function Step({ step, currStep }) {
	return (
		<div className='relative'>
			<motion.div
				initial={{ scale: 1, opacity: 1 }}
				animate={{ scale: currStep === step ? 1.15 : 1, opacity: 0 }}
				transition={{ duration: 1 }}
				className='absolute inset-0 bg-blue-200 rounded-full'
			/>
			<motion.div
				initial={false}
				animate={{
					borderColor:
						currStep === step
							? '#93C5FD'
							: currStep > step
							? '#00D26A'
							: '#D1D5DB',
					backgroundColor:
						currStep === step
							? '#FFFFFF'
							: currStep > step
							? '#00D26A'
							: '#FFFFFF',
					color: currStep === step ? '#93C5FD' : '#635994',
				}}
				transition={{ duration: 1 }}
				className={
					'h-16 w-16 text-3xl border-[3px] grid place-items-center rounded-full relative'
				}>
				{currStep > step ? <Tick /> : step}
			</motion.div>
		</div>
	);
}

function Tick() {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='2rem'
			height='2rem'
			viewBox='0 0 512.000000 512.000000'
			preserveAspectRatio='xMidYMid meet'>
			<g
				transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
				fill='#FFFFFF'
				stroke='none'>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 0.5 }}
					transition={{ duration: 1, delay: 1 }}
					d='M4613 4733 c-17 -10 -592 -652 -1278 -1428 -685 -775 -1258 -1420
-1273 -1432 -30 -25 -80 -30 -115 -11 -12 6 -213 185 -446 397 -233 212 -442
398 -465 414 -130 87 -307 99 -454 30 -83 -39 -175 -132 -219 -220 -33 -67
-38 -85 -41 -170 -5 -112 14 -197 60 -269 55 -87 1261 -1556 1302 -1586 176
-130 420 -108 573 51 41 42 361 551 1299 2061 1110 1789 1244 2009 1244 2045
0 51 -28 97 -73 118 -45 22 -74 21 -114 0z'
				/>
			</g>
		</svg>
	);
}
