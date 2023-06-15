import {SelectedPage, BenefitType} from "@/shared/types"
import {motion} from "framer-motion"
import TitleText from "@/shared/TitleText"
import BenefitItem from "@/shared/BenefitItem"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton"
import {
  HomeModernIcon, UserGroupIcon, AcademicCapIcon
} from "@heroicons/react/24/solid"


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "States of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus soluta quibusdam, molestiae maiores tenetur, corporis ipsam voluptatibus tempore accusantium porro eos ratione inventore ad nam magnam laborum officia modi."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus soluta quibusdam, molestiae maiores tenetur, corporis ipsam voluptatibus tempore accusantium porro eos ratione inventore ad nam magnam laborum officia modi."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus soluta quibusdam, molestiae maiores tenetur, corporis ipsam voluptatibus tempore accusantium porro eos ratione inventore ad nam magnam laborum officia modi."
  },
]


const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
   >
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5}}
      variants={{
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
      }}
    >
      <motion.div 
        className="md:my-5 md:w-3/5"
      > 
        <TitleText>MORE THAN JUST A GYM.</TitleText>
        <p className="my-5 text-sm w-5/6">
           We provide world class fitness equipment, trainers, and classes to
           get you to your ultimate fitness goals with ease. We provide true
           care into each and every member.
        </p>
      </motion.div>
      <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <BenefitItem 
            key={benefit.title}
            icon={benefit.icon} 
            title={benefit.title} 
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
            
        ))}
      </motion.div>
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img
          className="mx-auto" 
          src={BenefitsPageGraphic} 
          alt="Benefits: Page Graphic" 
        />

        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                  hidden: {opacity: 0, x: -50},
                  visible: {opacity: 1, x: 0}
                }}
              >
                <TitleText>MILLIONS OF HAPPY MEMBERS GETTING {" "} <span className="text-primary-500">FIT</span></TitleText>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci atque ex eaque sapiente, fugit placeat commodi aliquid facilis debitis ullam rerum ratione libero pariatur deserunt asperiores sint unde suscipit repudiandae exercitationem delectus illum cupiditate. Molestias ab beatae officiis possimus commodi! Doloribus sequi distinctio odio quia laudantium sint dignissimos voluptatibus?</p>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam fugiat voluptatem corporis iure iste consequuntur rem. Magni esse corrupti excepturi tempora neque vitae non, sapiente totam iusto eaque distinctio!</p>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
   </section>
  )
}

export default Benefits