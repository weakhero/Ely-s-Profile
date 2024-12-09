import excel from "../assets/excel.png";
import canva from "../assets/canva.png";
import word from "../assets/word-processor.png";
import ppt from "../assets/powerpoint.png";
import ai from "../assets/artificial-intelligence.png";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y:[10, -10],
    transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
   },
  },
});


const TechStacks = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial= {{opacity: 0, y: -100 }}
        transition={{duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>

        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial= {{opacity: 0, x: -100 }}
        transition={{duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20 w-20" src={excel} alt="excel" />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20 w-20" src={canva} alt="excel" />
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20 w-20" src={word} alt="excel" />
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20 w-20" src={ppt} alt="excel" />
            </motion.div>

            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20 w-20" src={ai} alt="excel" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default TechStacks
