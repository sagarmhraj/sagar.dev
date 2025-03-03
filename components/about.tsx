"use client"

import { useEffect } from "react"
import AOS from "aos"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Server, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const highlights = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js and modern CSS frameworks.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Full Stack Solutions",
      description: "Developing end-to-end web applications with seamless integration between frontend and backend.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Collaboration",
      description: "Working effectively in agile teams to deliver high-quality software solutions.",
    },
  ]

  return (
    <section id="about" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-40 h-40 bg-primary/5 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-60 h-60 bg-primary/5 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-subtitle">Who I Am</h3>
            <p className="text-foreground/70 mb-6">
              I'm a passionate MERN Stack Developer with a year of experience in designing and developing scalable web
              applications. My journey in web development started during my Master's in Computer Applications, where I
              discovered my passion for creating interactive and user-friendly web experiences.
            </p>
            <p className="text-foreground/70">
              I specialize in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. I'm
              committed to writing clean, maintainable code and constantly learning new technologies to stay at the
              forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="section-subtitle">Education</h3>
            <div className="space-y-4">
              <EducationItem
                title="Master of Computer Applications (MCA)"
                institution="R.C.E.T Bhilai, Chhattisgarh"
                period="2022 - 2024"
                grade="CGPA: 65%"
                delay={0.1}
              />
              <EducationItem
                title="Bachelor of Science in Mathematics"
                institution="Sant Gahira Guru University, Surguja, C.G"
                period="2019 - 2022"
                grade="CGPA: 74%"
                delay={0.2}
              />
              <EducationItem
                title="Higher Secondary in Mathematics"
                institution="Ken Memorial Hr. Sec. School, C.G"
                period="2017 - 2018"
                grade="CGPA: 64%"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="mb-4 p-3 rounded-full bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationItem({
  title,
  institution,
  period,
  grade,
  delay,
}: {
  title: string
  institution: string
  period: string
  grade: string
  delay: number
}) {
  return (
    <motion.div
      className="border-l-2 border-primary pl-4 py-2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.h4
        className="font-semibold"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {title}
      </motion.h4>
      <p className="text-sm text-foreground/70">
        {institution} | {period}
      </p>
      <p className="text-sm">{grade}</p>
    </motion.div>
  )
}

