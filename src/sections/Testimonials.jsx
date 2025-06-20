import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child's animation
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 }, // Cards start slightly down and transparent
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What My Peers Have To Say?" sub="💭 Testimonials" />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // Adjust margin as needed
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <GlowCard
                card={testimonial}
                key={index}
                index={index}
                variants={cardVariants}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <img src={testimonial.imgPath} alt="" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
