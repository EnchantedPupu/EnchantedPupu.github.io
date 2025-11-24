"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import MouseParticles from "@/components/ui/MouseParticles";
import Link from "next/link";
import { Banner } from "@/components/ui/Banner";
import { Timeline } from "@/components/ui/Timeline";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first project. It showcases the use of modern technologies and clean design.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Another amazing project that solves a real-world problem. Built with performance and accessibility in mind.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "A creative experiment exploring new web APIs and interactive animations.",
      tags: ["WebGL", "Three.js", "GSAP"],
      link: "#"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="flex flex-col gap-24 pb-24 relative">
      <Banner />
      <MouseParticles />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-24"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="container mx-auto px-4 py-20 text-center pt-32">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="/niel.png"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white/20"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-blue-300">
            Niels Evant Robort
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            I am a final-year Software Engineering student at UNIMAS and have interned at PETRONAS
            with strong hands-on experience in Fullstack development, mobile apps, and AI-driven game concepts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#projects">
              <Button size="lg">View Work</Button>
            </Link>
            <Link href="#contact">
              <Button variant="secondary" size="lg">Contact Me</Button>
            </Link>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section variants={itemVariants} id="about" className="px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

            {/* About Me Text */}
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground text-center mb-16">
              <p>
                Hello! I'm a developer who loves the intersection of design and engineering.
                I worked on scalable C# backend systems and code-quality improvements during my time at PETRONAS.
                My interests are limitless and pursued by the drive to learn and explore.
              </p>
              <p>
                I believe that the best software is not just functional, but also intuitive and beautiful.
                With a background in computer science and a keen eye for detail, I strive to create
                web experiences that leave a lasting impression.
              </p>
            </div>

            {/* Experience & Education Timeline */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Experience & Education</h3>
              <Timeline items={[
                {
                  year: "2024",
                  title: "PETRONAS Internship",
                  description: "Worked on scalable C# backend systems and implemented code-quality improvements for enterprise applications."
                },
                {
                  year: "2022-Present",
                  title: "Software Engineering @ UNIMAS",
                  description: "Final-year student specializing in fullstack development, mobile apps, and AI-driven game concepts."
                },
                {
                  year: "2023",
                  title: "Fullstack Development",
                  description: "Built multiple web applications using modern frameworks and technologies, focusing on user experience and performance."
                },
                {
                  year: "2022",
                  title: "Mobile App Development",
                  description: "Developed cross-platform mobile applications with focus on intuitive design and seamless functionality."
                }
              ]} />
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={itemVariants} id="projects" className="px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-muted/30 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <div className="h-48 bg-muted rounded-t-xl mb-6 animate-pulse">
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                      Project Image
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" className="w-full mt-auto">View Details</Button>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section variants={itemVariants} id="contact" className="px-4 sm:px-6 lg:px-8 scroll-mt-24 mb-12">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:nielsivant85@gmail.com">
              <Button size="lg" className="w-full sm:w-auto">
                Say Hello
              </Button>
            </a>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}

