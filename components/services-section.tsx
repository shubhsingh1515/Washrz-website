"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Premium Dry Cleaning",
    description: "For suits, silks, designer wear",
    icon: "👔",
    image: "/images/dry-cleaning.jpg",
    color: "from-primary to-accent",
  },
  {
    title: "Professional Shoe Spa",
    description: "Sneakers, leather, suede, boots",
    icon: "👟",
    image: "/images/shoe-spa.webp",
    color: "from-accent to-secondary",
  },
  {
    title: "Wash & Fold Laundry",
    description: "Daily wear, flat-rate bag",
    icon: "👕",
    image: "/images/wash-fold.webp",
    color: "from-secondary to-primary",
  },
  {
    title: "Handbag & Bag Spa",
    description: "Cleaning, color restoration",
    icon: "👜",
    image: "/images/handbag.avif",
    color: "from-primary to-secondary",
  },
  {
    title: "On-site Sofa Cleaning",
    description: "Deep cleaning for your home",
    icon: "🛋️",
    image: "/images/sofa.avif",
    color: "from-accent to-primary",
  },
  {
    title: "Leather & Suede",
    description: "Jackets, bags, specialty items",
    icon: "🧥",
    image: "/images/leather.jpg",
    color: "from-secondary to-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-card/50 to-background relative overflow-hidden"
    >
      {/* Background floating elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/3 -right-32 w-96 h-96 border border-primary/10 rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
      />

      <motion.div
        className="absolute top-20 left-1/4 text-7xl opacity-15"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        🧴
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-base text-accent font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-5xl font-bold text-foreground mb-4 mt-2">
            All Your Cleaning Needs, Covered
          </h2>
          <p className="text-lg text-foreground/70">
            From delicate designer wear to your favorite sneakers
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -12,
                shadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
              }}
              className="group relative"
            >
              {/* CARD */}
              <div className="bg-background border border-border rounded-2xl p-8 cursor-pointer transition-all h-full overflow-hidden relative">
   <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity z-10`}
                />
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 scale-125 pointer-events-none z-0"
                />
              

                {/* ⭐ SPARKLE */}
                <motion.div
                  className="absolute -top-3 -right-4 text-4xl z-20"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                >
                  ✨
                </motion.div>

                {/* ⭐ CONTENT */}
                <div className="relative z-30">
                  {/* Icon */}
                  <motion.div className="text-7xl mb-4 inline-block group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-base text-foreground/70 mb-4">
                    {service.description}
                  </p>

                  {/* Hover line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Learn more */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 text-base text-primary font-medium"
                  >
                    Learn more →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
