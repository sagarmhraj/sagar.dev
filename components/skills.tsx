"use client"

import { useEffect, useRef } from "react"
import AOS from "aos"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const frontendSkills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Redux", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap 5", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "RESTful APIs", level: 85 },
    { name: "SQL (Basic)", level: 60 },
  ]

  const toolsSkills = [
    { name: "Git & GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Chrome DevTools", level: 85 },
    { name: "Postman", level: 80 },
    { name: "Docker", level: 65 },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  return (
    <section id="skills" className="section-padding bg-muted/50 relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-md rotate-45 bg-primary/5"
          animate={
            isInView
              ? {
                  rotate: [45, 90, 45],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                  scale: [1, 1.3, 1],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                  scale: [1, 1.2, 1],
                  x: [0, 30, 0],
                  y: [0, 20, 0],
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
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} delay={0} />
          <SkillCard title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillCard title="Tools & Others" skills={toolsSkills} delay={0.4} />
        </div>

        <div className="mt-16">
          <motion.h3
            className="section-subtitle text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Soft Skills
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem-solving",
              "Communication",
              "Adaptability",
              "Team Collaboration",
              "Time Management",
              "Critical Thinking",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                }}
                style={{ "--primary-color": "hsl(var(--primary))" } as any}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  skills,
  delay,
}: {
  title: string
  skills: { name: string; level: number }[]
  delay: number
}) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <motion.h3
            className="text-xl font-semibold mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                  className="h-2 bg-primary rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

