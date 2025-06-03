
"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-card" key={i}>
                  <div className="text-foreground mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "This AI platform revolutionized our development workflow. The intuitive interface and powerful models make coding faster than ever.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Chen",
    role: "Senior Developer",
  },
  {
    text: "The model selection and seamless integration capabilities exceeded our expectations. Perfect for enterprise-grade applications.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcus Johnson",
    role: "Tech Lead",
  },
  {
    text: "Outstanding support and documentation. The team helped us implement custom solutions that perfectly fit our needs.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Rodriguez",
    role: "Product Manager",
  },
  {
    text: "The flexibility to switch between different AI providers without vendor lock-in is exactly what we needed for our startup.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Park",
    role: "CTO",
  },
  {
    text: "Incredible performance improvements across our entire development pipeline. This platform is a game-changer.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lisa Wang",
    role: "DevOps Engineer",
  },
  {
    text: "The open-source nature and active community make this platform our go-to choice for AI-powered development.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Amanda Foster",
    role: "Solutions Architect",
  },
  {
    text: "Seamless deployment and monitoring capabilities helped us scale our AI applications with confidence.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Mitchell",
    role: "Engineering Manager",
  },
  {
    text: "The cost optimization and transparent pricing model allowed us to efficiently manage our AI infrastructure budget.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Rachel Kim",
    role: "Finance Director",
  },
  {
    text: "User-friendly interface combined with enterprise-grade security makes this platform perfect for our compliance requirements.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Michael Thompson",
    role: "Security Engineer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background py-32 relative">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="border py-1 px-4 rounded-lg text-sm">Testimonials</div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-5 text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
