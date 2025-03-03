"use client"

import type React from "react"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div className="order-2 md:order-1" variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-primary font-medium mb-2">
            Hello, I'm
          </motion.p>
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4">
            Sagar <span className="gradient-text">Mishra</span>
          </motion.h1>
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">
            <span className="relative">
              <span className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-primary/20 rounded-sm"></span>
              Full Stack Developer
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-lg mb-8 max-w-lg text-foreground/70">
            MERN Stack Developer with experience in designing and developing scalable web applications. Passionate about
            delivering user-focused applications while maintaining high performance and scalability.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
              <Link href="#contact">
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-primary/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full group relative overflow-hidden">
              <Link href="#projects">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex gap-4">
            <SocialButton href="https://github.com/sagarmhraj" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialButton
              href="https://www.linkedin.com/in/sagar-mishra-909840220"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialButton href="mailto:sagarmishra680@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-500"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
              }}
            />
            <motion.div
              className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <img
                src="/profile.avif?height=300&width=300"
                alt="Sagar Mishra"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm text-foreground/50 mb-2">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full relative overflow-hidden group">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
        <motion.span
          className="relative z-10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.span>
        <span className="sr-only">{label}</span>
      </Link>
    </Button>
  )
}

