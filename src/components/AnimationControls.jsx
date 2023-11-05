import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

export default function AnimationControls() {
	const controls = useAnimationControls();
	const [flip, setFlip] = useState(true);

	const flipBox = () => {
		setFlip((prev) => !prev);
		controls.start({
			rotate: flip ? '360deg' : '-360deg',
			transition: {
				duration: 2,
			},
		});
	};

	return (
		<div style={{ display: 'grid', placeItems: 'center', gap: '.05rem' }}>
			<motion.button
				whileHover={{ scale: 1.15 }}
				whileTap={{ scale: 0.95, rotate: '2.5deg' }}
				onClick={flipBox}
				style={{
					backgroundColor: 'cyan',
					color: 'white',
					fontWeight: 700,
					padding: '10px 20px',
					borderRadius: 8,
					marginBottom: 40,
				}}>
				Click Me
			</motion.button>

			<motion.div
				animate={controls}
				style={{
					backgroundColor: 'black',
					height: 200,
					width: 200,
				}}></motion.div>
		</div>
	);
}
