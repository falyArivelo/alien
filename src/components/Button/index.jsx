import { motion } from 'framer-motion';
import './style.scss';

export default function Button({ isActive, toggleMenu }) {
    return (
        <div className='button'>
            <motion.div
                className='slider'
            // animate={{ top: isActive ? "-100%" : "0%" }}
            // transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className='el'
                    onClick={() => { toggleMenu() }}
                >a
                </div>

            </motion.div>
        </div>
    )
}
