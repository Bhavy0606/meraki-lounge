import AllStylists from "../../components/stylistsComponents/allStylists"
import BookStylist from "../../components/stylistsComponents/book-stylist"
import ContactUsFooter from "../../components/stylistsComponents/contact-us-footer"
import Founder from "../../components/stylistsComponents/founder"
import {Variants, motion} from "framer-motion"
function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min
}
const StylistsPage = () => {
    const imageVariants: Variants = {
        imageOffScreen: {
            scale: 0.8,
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
                <Founder />
            </motion.div>
            <motion.div initial="imageOffScreen" whileInView="imageOnScreen" variants={imageVariants}>
                <BookStylist />
            </motion.div>

            {/* <motion.div initial="imageOffScreen" whileInView="imageOnScreen" variants={imageVariants}> */}
            <AllStylists />
            <ContactUsFooter />
            {/* </motion.div> */}
        </>
    )
}

export default StylistsPage
