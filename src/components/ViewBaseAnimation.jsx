import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ViewBaseAnimation() {
	const secondBoxRef = useRef(null);
	const inView = useInView(secondBoxRef);

	console.log(inView);

	return (
		<div>
			<div style={{ height: '150vh' }}></div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					duration: 0.8,
				}}
				style={{
					height: '100vh',
					width: '100vw',
					backgroundColor: 'black',
				}}
			/>

			<div
				ref={secondBoxRef}
				style={{
					height: '100vh',
					width: '100vw',
					background: 'red',
					transition: '3s background',
				}}
			/>
		</div>
	);
}
