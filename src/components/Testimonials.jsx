import { motion } from "framer-motion";


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
          People like you love BabyShark
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="2em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" className="rounded-full w-[45px] h-[45px] object-cover" />
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