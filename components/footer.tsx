"use client"

import type React from "react"
import { useEffect } from "react"
import AOS from "aos"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/80 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-20 h-20 rounded-full bg-primary/5"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-primary/5"
          animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} // ✅ Fixed transition syntax
          >
            <Link href="#home" className="text-2xl font-bold gradient-text mb-6">
              Sagar<span className="text-primary">.dev</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SocialButton
              href="https://github.com/sagarmhraj"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
            <SocialButton
              href="https://www.linkedin.com/in/sagar-mishra-909840220"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialButton
              href="mailto:sagarmishra680@gmail.com"
              icon={<Mail className="h-5 w-5" />}
              label="Email"
            />
          </motion.div>

          <motion.div
            className="text-center text-foreground/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>&copy; {new Date().getFullYear()} Sagar Mishra. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button asChild variant="outline" size="icon" className="rounded-full relative overflow-hidden group">
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
