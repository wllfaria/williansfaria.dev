import { Variants, motion, Variant } from 'framer-motion'
import React from 'react'

const easing = [0.6, -0.05, 0.01, 0.99]

const transitionVariants: Variants = {
	initial: {
		opacity: 0,
		y: 200
	},
	enter: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: easing }
	}
}

const exit: Variant = {
	opacity: 0,
	y: 200,
	transition: { duration: 0.3, ease: easing }
}

const Transition: React.FC = ({ children }) => {
	return (
		<motion.div exit={exit} initial="initial" animate="enter" variants={transitionVariants}>
			{children}
		</motion.div>
	)
}

export default Transition
