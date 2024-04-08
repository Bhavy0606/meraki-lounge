import ContactUs from "../../components/contactUs"

import {Variants, motion} from "framer-motion"
function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min
}
const Contact = () => {
    const imageVariants: Variants = {
        imageOffScreen: {
            scale: 0.6,
            opacity: 0,
            zIndex: -11,
        },
        imageOnScreen: {
            scale: 1,
            opacity: 1,
            zIndex: 0,
            transition: {
                duration: getRandomFloat(0.5, 1.0),
            },
        },
    }
    return (
        <>
            <motion.div initial="imageOffScreen" whileInView="imageOnScreen" variants={imageVariants}>
                <ContactUs />
            </motion.div>
        </>
    )
}

export default Contact
