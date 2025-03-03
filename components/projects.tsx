"use client"

import { useEffect, useRef } from "react"
import AOS from "aos"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Designed and developed an e-commerce platform using React.js, Node.js, Express.js, and MongoDB. Implemented features like product search, filtering, shopping cart, and order management.",
      image: "/ecom.webp?height=400&width=600",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux",],
      liveLink: "https://ecomarce-application.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Travel Booking System",
      description:
        "Built a travel booking application to manage flights, hotels, and car rentals using MERN stack. Integrated third-party APIs to fetch real-time availability and pricing data for travel bookings.",
      image: "/travel.webp?height=400&width=600",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker",],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "Developed a task management application with features like task creation, assignment, status tracking, and notifications. Implemented user authentication and role-based access control.",
      image: "/task.webp?height=400&width=600",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard that displays current weather conditions and forecasts for multiple locations. Integrated with weather APIs to fetch real-time data.",
      image: "/weather.jpeg?height=400&width=600",
      technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Chart.js", "Netlify"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  return (
    <section id="projects" className="section-padding bg-muted/50 relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                scale: [1, 1.2, 1],
                y: [0, -30, 0],
              }
              : {}
          }
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary/5"
          animate={
            isInView
              ? {
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
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
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden group">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {/* <div className="flex gap-4">
                      <Button asChild variant="default" size="sm" className="rounded-full">
                        <Link href={project.liveLink} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="rounded-full bg-background">
                        <Link href={project.githubLink} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </div> */}
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

