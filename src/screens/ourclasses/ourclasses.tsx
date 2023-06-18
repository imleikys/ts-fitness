import {SelectedPage} from "@/shared/types"
import {motion} from "framer-motion"
import {ClassType} from "@/shared/types"
import Class from "./class"
import TitleText from "@/shared/TitleText"
import Image1 from "@/assets/image1.png"
import Image2 from "@/assets/image2.png"
import Image3 from "@/assets/image3.png"
import Image4 from "@/assets/image4.png"
import Image5 from "@/assets/image5.png"
import Image6 from "@/assets/image6.png"

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    image: Image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage.OurClasses) => void 
}

const OurClasses = ({setSelectedPage}: Props) => {

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}
        >
            <div className="md:w-3/5">
              <TitleText>OUR CLASSES</TitleText>
              <p className="py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto reprehenderit magnam exercitationem sunt, nihil eius, voluptates quod aut magni doloremque fugiat eligendi vitae nostrum libero cumque harum! Minus inventore unde amet? Ipsam aliquam porro, veritatis nam, quod doloribus molestias consequatur fugit vero quisquam sunt maiores quam, repellendus perferendis? Quos ipsam nulla autem reiciendis saepe nemo voluptates, recusandae quis natus sunt placeat ducimus, neque explicabo. Ad excepturi quam illo natus perferendis.</p>
            </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {
              classes.map((item: ClassType, index) => (
                <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))
            }
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses