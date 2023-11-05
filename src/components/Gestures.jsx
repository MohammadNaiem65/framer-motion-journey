import { motion, MotionConfig } from 'framer-motion';

export default function Gestures() {
	return (
		<div style={{ display: 'grid', placeItems: 'center' }}>
			<MotionConfig transition={{ duration: 0.3 }}>
				<motion.button
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.95, rotate: '2.5deg' }}
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
				<motion.button
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.95, rotate: '2.5deg' }}
					style={{
						backgroundColor: 'red',
						color: 'white',
						fontWeight: 700,
						padding: '10px 20px',
						borderRadius: 8,
						marginBottom: 40,
					}}>
					Click Me
				</motion.button>
			</MotionConfig>
		</div>
	);
}
