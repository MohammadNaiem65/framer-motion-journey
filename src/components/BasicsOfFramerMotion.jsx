import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function BasicsOfFramerMotion() {
	const [isVisible, setIsVisible] = useState(true);
	return (
		<div>
			<motion.button
				layout
				onClick={() => setIsVisible((prev) => !prev)}
				style={{
					backgroundColor: 'cyan',
					color: 'white',
					fontWeight: 700,
					padding: '10px 20px',
					borderRadius: 15,
					marginBottom: 40,
				}}>
				Show/Hide
			</motion.button>
			<AnimatePresence mode='popLayout'>
				{isVisible && (
					<motion.div
						initial={{ rotate: '0deg' }}
						animate={{
							rotate: '180deg',
							y: [0, 30, -150, -150, 0],
						}}
						exit={{ rotate: '0deg' }}
						transition={{
							duration: 3,
							ease: 'backInOut',
							times: [0, 0.8, 0.9, 0.95, 1],
						}}
						style={{
							height: 150,
							width: 150,
							backgroundColor: 'black',
						}}></motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
