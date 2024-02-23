import {motion} from "framer-motion"

export function transition_right( OgComponent ) {
    return () => (
        <>
            <OgComponent/>

            <motion.div
                className="slide-right-in"
                initial={{scaleX:0}}
                animate={{scaleX:0}}
                exit={{scaleX:1}}
                transition={{duration: 0.5, ease: "easeOut"}}
            />
            <motion.div
                className="slide-right-out"
                initial={{scaleX:1}}
                animate={{scaleX:0}}
                exit={{scaleX:0}}
                transition={{duration: 0.5, ease: "easeOut"}}
            />
        </>
    )
}

export function transition_left( OgComponent ) {
    return () => (
        <>
            <OgComponent/>

            <motion.div
                className="slide-left-in"
                initial={{scaleX:0}}
                animate={{scaleX:0}}
                exit={{scaleX:1}}
                transition={{duration: 0.5, ease: "easeOut"}}
            />
            <motion.div
                className="slide-left-out"
                initial={{scaleX:1}}
                animate={{scaleX:0}}
                exit={{scaleX:0}}
                transition={{duration: 0.5, ease: "easeOut"}}
            />
        </>
    )
}