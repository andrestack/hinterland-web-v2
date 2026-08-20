"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero12() {
  return (
    <section className="relative w-full bg-card overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-[1400px] mx-auto w-full h-full relative min-h-[600px]">
        <div className="absolute inset-0 bg-muted rounded-3xl overflow-hidden z-0">
          <img
            src="/images/hinterland-illustration.jpg"
            alt="Interior design living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/20 lg:bg-transparent" />
        </div>

        <div className="absolute top-0 left-0 z-10 w-full max-w-2xl flex flex-col items-start pointer-events-none">
          <div className="bg-card w-fit p-4 relative rounded-br-4xl pointer-events-auto">
            <h1 className="whitespace-nowrap text-2xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              Transforming Homes
            </h1>
            <svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 -right-10 rotate-180 text-primary-foreground"
            >
              <path
                d="M0 200C155.996 199.961 200.029 156.308 200 0V200H0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="bg-card w-fit p-4 relative rounded-br-4xl pointer-events-auto">
            <h1 className="whitespace-nowrap text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
              Since 1995
            </h1>

            <svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 -right-10 rotate-180 text-primary-foreground"
            >
              <path
                d="M0 200C155.996 199.961 200.029 156.308 200 0V200H0Z"
                fill="currentColor"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-10 left-0 rotate-180 text-primary-foreground"
            >
              <path
                d="M0 200C155.996 199.961 200.029 156.308 200 0V200H0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="mt-8 ml-4 lg:hidden">
            <motion.button
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-colors shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="absolute top-8 right-8 z-20 hidden lg:block">
          <motion.button
            className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-colors shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-20 lg:left-auto lg:right-8 lg:bottom-8 lg:w-80">
          <motion.div
            className="bg-card/95 backdrop-blur-sm p-2 rounded-2xl shadow-md space-y-4 border border-border"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="rounded-lg overflow-hidden h-32 w-full">
              <img
                src="/images/hinterland-illustration.jpg"
                alt="Design detail"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-2">
              <h3 className="text-xl font-medium text-foreground mb-1">
                Custom Design Solutions
              </h3>
              <p className="text-sm text-muted-foreground max-w-[25ch]">
                Personalized interiors crafted to reflect your vision.
              </p>
            </div>

            <button className="m-2 flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity w-full justify-between group cursor-pointer">
              More info <ArrowRight className="w-4 h-4 transform mr-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero12;
