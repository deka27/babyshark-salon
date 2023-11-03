import { motion } from "framer-motion";

import { FaQuoteLeft } from "react-icons/fa6";
// import testimonial1 from "../assets/images/t1.jpg";
// import testimonial2 from "../assets/images/t2.jpg";
// import testimonial3 from "../assets/images/t3.jpg";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "12 years old",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo enim, dictum id ex id, dignissim ullamcorper turpis. Maecenas imperdiet sapien convallis, egestas ligula nec, tristique sem. Pellentesque eros dui, cursus id nisi ut, vulputate consequat sem.",
    image: "/images/t1.jpg",
  },
  {
    customerName: "John Watkins",
    customerTitle: "10 years old",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo enim, dictum id ex id, dignissim ullamcorper turpis. Maecenas imperdiet sapien convallis, egestas ligula nec, tristique sem. Pellentesque eros dui, cursus id nisi ut, vulputate consequat sem.",
    image: "/images/t2.jpg",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Parent",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo enim, dictum id ex id, dignissim ullamcorper turpis. Maecenas imperdiet sapien convallis, egestas ligula nec, tristique sem. Pellentesque eros dui, cursus id nisi ut, vulputate consequat sem.",
    image: "/images/t3.jpg",
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          People like you love Tailcast
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2 text-white">
                <FaQuoteLeft />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" className="rounded-full w-[45px] h-[45px] object-cover"/>
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);