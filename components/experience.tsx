"use client"

import { useEffect, useRef } from "react"
import AOS from "aos"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Newness Marketing Technology",
      location: "Mumbai",
      period: "January 2024 – Present",
      responsibilities: [
        "Developed responsive web applications using React.js, Tailwind CSS, and Redux for state management.",
        "Designed and implemented microservices architecture for modular and fault-tolerant systems.",
        "Optimized MongoDB queries to improve database performance by 25%.",
        "Developed RESTful APIs for authentication, role-based access, and CRUD operations.",
      ],
      skills: ["React.js", "Redux", "Tailwind CSS", "MongoDB", "RESTful APIs"],
    },
    {
      title: "Intern Frontend Developer",
      company: "Octane infotech",
      location: "Remote",
      period: "July 2023 – January 2024",
      responsibilities: [
        "Built responsive, cross-browser compatible user interfaces using HTML, CSS, JavaScript and React.",
        "Gained experience in working with React.js and Tailwind CSS for frontend development.",
        "Expanded expertise in React.js and Tailwind CSS for dynamic, modern frontend development.",
        "Streamlined workflows by introducing updated frontend best practices and methodologies.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
  ]

  const certifications = [
    "MERN Stack Development Certification – Coursera",
    "Microservices with Node.js – Udemy",
    "React.js Advanced Concepts – FreeCodeCamp",
  ]

  const achievements = [
    "Menstrual Hygiene Day Hackathon - Participated at R.C.E.T College Bhilai | 2023",
    "State-Level Cricket Player - Surguja University | 2019 – 2020",
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  return (
    <section id="experience" className="section-padding relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  x: [0, -30, 0],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                  scale: [1, 1.1, 1],
                  y: [0, -20, 0],
                }
              : {}
          }
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
          Experience
        </motion.h2>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-l-4 border-l-primary card-hover overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Animated highlight effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                  />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <motion.div
                        className="p-2 rounded-full bg-primary/10"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Briefcase className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-xl">{exp.title}</h3>
                    </div>
                    <div className="text-sm text-foreground/70">{exp.period}</div>
                  </div>

                  <div className="mb-4 relative z-10">
                    <p className="text-foreground/80">
                      {exp.company}, {exp.location}
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/70 relative z-10">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="min-w-5 mt-1">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                      <p>{cert}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Achievements</h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: -5 }}
                    >
                      <div className="min-w-5 mt-1">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                        />
                      </div>
                      <p>{achievement}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

