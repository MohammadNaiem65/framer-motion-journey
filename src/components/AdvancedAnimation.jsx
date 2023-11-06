import { useAnimate } from 'framer-motion';

export default function AdvancedAnimation() {
	const [scope, animate] = useAnimate();

	const showMagic = async () => {
		await animate('#target', { opacity: 0 });
		await animate('#target', { y: 175 });
		await animate('#target', { opacity: 1 });
	};

	return (
		<div ref={scope}>
			<div id='target' className='h-24 w-24 bg-violet-600' />
			<button
				className='text-white font-semibold bg-black px-3 py-2 my-5 rounded-md'
				onClick={showMagic}>
				Click for Magic 🪄
			</button>
		</div>
	);
}
