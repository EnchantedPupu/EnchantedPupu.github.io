"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/Timeline";
import { motion, Variants } from "framer-motion";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
  images: ProjectImage[];
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const profile = {
    name: "Niels Evant Robort",
    title: "FULL-STACK SOFTWARE ENGINEER / SECURITY ENGINEER",
    summary:
      "Security-focused Full-Stack Developer with expertise in designing resilient, AI-integrated applications and enterprise backend systems. Adept at threat modeling, implementing secure API integrations (JWT, OAuth), and mitigating web application vulnerabilities (such as SQL injection) to ensure complete data integrity. Strong background in Agile development, delivering clean, maintainable, and deeply secure code for fast-paced corporate environments.",
    location: "Kuching, Sarawak, Malaysia",
    phone: "+60194374210",
    email: "nielsivant85@gmail.com",
    handle: "@nielsevant",
  };

  const highlights = [
    {
      label: "Security Focus",
      value: "OWASP + API Security",
      detail: "JWT, OAuth, SQLi/CSRF/XSS"
    },
    {
      label: "Enterprise Delivery",
      value: "PETRONAS",
      detail: "Mar 2025 - Sep 2025"
    },
    {
      label: "AI + CV/NLP",
      value: "MedSense (FYP)",
      detail: "Oct 2025 - Jul 2026"
    },
    {
      label: "Stack Breadth",
      value: "MERN / LAMP / Flutter",
      detail: "Web + Mobile Systems"
    }
  ];

  const projects: Project[] = [
    {
      title: "Real-time Buffered Reporting Engine",
      period: "May 2026",
      description:
        "Real-time financial transaction dashboard with a .NET 9 gRPC backend and a React + Redux frontend. The backend streams mock transactions at high frequency, while Redis provides a hot-cache layer to avoid repeated work. The frontend buffers incoming gRPC packets and only flushes to the UI every 500ms to avoid render storms.",
      stack: [
        ".NET 9",
        "gRPC",
        "Protobuf",
        "Redis",
        "React",
        "Redux Toolkit",
        "Vite",
        "TypeScript",
        "gRPC-Web",
        "Prometheus",
        "Docker"
      ],
      highlights: [
        "Server-streaming gRPC API with Protobuf and gRPC-Web client.",
        "Redis hot-cache with batch recycling plus pub/sub invalidation.",
        "Per-instance throttling and per-client token bucket rate limiting.",
        "Client buffer flush every 500ms with adaptive batch sizing.",
        "Virtualized list rendering with rolling anomaly detection."
      ],
      images: [
        {
          src: "/assets/Real-time%20Buffered%20Reporting%20Engine/Screenshot%202026-05-22%20125700.png",
          alt: "Transaction dashboard with live metrics"
        },
        {
          src: "/assets/Real-time%20Buffered%20Reporting%20Engine/Screenshot%202026-05-22%20131743.png",
          alt: "Transaction dashboard with charts and category mix"
        },
        {
          src: "/assets/Real-time%20Buffered%20Reporting%20Engine/Screenshot%202026-05-22%20134027.png",
          alt: "Transaction dashboard with transaction list"
        }
      ]
    },
    {
      title: "MedSense",
      period: "Oct 2025 - Jul 2026",
      description:
        "AI-powered pill recognition and prescription verification app that combines computer vision and NLP to identify medication, cross-check prescriptions, and issue real-time safety alerts.",
      stack: ["Flutter", "FastAPI", "TensorFlow Lite", "OCR", "NLP", "PostgreSQL", "SQLite"],
      highlights: [
        "Integrated camera-based pill recognition with OCR + NLP prescription checks.",
        "Designed for real-time safety alerts, drug interaction warnings, and RAD delivery."
      ],
      images: [
        {
          src: "/assets/medsense/Screenshot%202026-04-20%20223142.png",
          alt: "MedSense pill scan screen"
        },
        {
          src: "/assets/medsense/Screenshot%202026-05-05%20093952.png",
          alt: "MedSense verification complete screen"
        },
        {
          src: "/assets/medsense/Screenshot%202026-05-05%20094039.png",
          alt: "MedSense caregiver console overview"
        },
        {
          src: "/assets/medsense/Screenshot%202026-05-05%20102152.png",
          alt: "MedSense register medication modal"
        }
      ]
    },
    {
      title: "BacaSama",
      period: "Oct 2024 - Jul 2025",
      description:
        "Phonics-based literacy platform for adult Malay learners in rural Sarawak, designed with offline-first lessons, OCR, and speech recognition for continuous access.",
      stack: ["Flutter", "Firebase", "REST APIs", "ML Kit", "OCR", "Speech Recognition", "Riverpod"],
      highlights: [
        "Offline-first mobile experience tailored for rural connectivity constraints.",
        "Speech recognition and OCR to guide reading and writing practice."
      ],
      images: [
        {
          src: "/assets/bacasama/WhatsApp%20Image%202026-05-20%20at%2009.18.26.jpeg",
          alt: "BacaSama learning home"
        },
        {
          src: "/assets/bacasama/WhatsApp%20Image%202026-05-20%20at%2009.18.27%20%281%29.jpeg",
          alt: "BacaSama lesson list"
        },
        {
          src: "/assets/bacasama/WhatsApp%20Image%202026-05-20%20at%2009.18.27%20%282%29.jpeg",
          alt: "BacaSama letter practice"
        },
        {
          src: "/assets/bacasama/WhatsApp%20Image%202026-05-20%20at%2009.18.27.jpeg",
          alt: "BacaSama lesson overview"
        },
        {
          src: "/assets/bacasama/WhatsApp%20Image%202026-05-20%20at%2009.18.28.jpeg",
          alt: "BacaSama progress screen"
        }
      ]
    },
    {
      title: "Atlas",
      period: "Jan 2024 - Dec 2024",
      description:
        "Digital land management and field operation system for Sarawak Land and Survey Department, enabling real-time data collection with secure REST APIs and role-based access.",
      stack: ["Flutter", "HTML/CSS", "JavaScript", "Bootstrap", "PHP", "REST APIs", "RBAC", "MySQL/PostgreSQL"],
      highlights: [
        "Converted paper-based workflows into a secure digital environment.",
        "Cross-platform field data collection with role-based access controls."
      ],
      images: [
        {
          src: "/assets/atlas/Screenshot%202026-01-12%20214746.png",
          alt: "Atlas mobile dashboard"
        },
        {
          src: "/assets/atlas/Screenshot%202026-01-12%20215040.png",
          alt: "Atlas web dashboard"
        },
        {
          src: "/assets/atlas/Screenshot%202026-01-12%20215239.png",
          alt: "Atlas job details"
        },
        {
          src: "/assets/atlas/Screenshot%202026-01-20%20104922.png",
          alt: "Atlas survey job form"
        }
      ]
    },
    {
      title: "PhotoTake",
      period: "FEB 2025 - JUNE 2025",
      description:
        "Photography service booking app complete with admin analytics dashboard, enabling seamless client bookings and operational insights for a local studio.",
      stack: ["Flutter", "Firebase", "Gemini", "SQLite", "Data Visualization"],
      highlights: [
        "End-to-end flow from client login to booking management.",
        "Analytics and admin panels for operational visibility."
      ],
      images: [
        {
          src: "/assets/phototake/WhatsApp%20Image%202026-05-20%20at%2009.13.59.jpeg",
          alt: "PhotoTake login screen"
        },
        {
          src: "/assets/phototake/WhatsApp%20Image%202026-05-20%20at%2009.14.00%20%281%29.jpeg",
          alt: "PhotoTake admin dashboard"
        },
        {
          src: "/assets/phototake/WhatsApp%20Image%202026-05-20%20at%2009.14.00%20%282%29.jpeg",
          alt: "PhotoTake analytics view"
        },
        {
          src: "/assets/phototake/WhatsApp%20Image%202026-05-20%20at%2009.14.00.jpeg",
          alt: "PhotoTake booking form"
        },
        {
          src: "/assets/phototake/WhatsApp%20Image%202026-05-20%20at%2009.14.01.jpeg",
          alt: "PhotoTake performance view"
        }
      ]
    },
    {
      title: "StepPath",
      period: "FEB 2026 - APRIL 2026",
      description:
        "Running tracker experience with AI weekly planning, live route tracking, and run summaries.",
      stack: ["Mobile", "Maps", "Workout Planning", "Performance Tracking", "Flutter", "Google Maps API", "TensorFlow Lite"],
      highlights: [
        "AI weekly workout planning and daily goals.",
        "Live map tracking with performance summaries."
      ],
      images: [
        {
          src: "/assets/steppath/Screenshot%202026-04-03%20235155.png",
          alt: "StepPath run history"
        },
        {
          src: "/assets/steppath/Screenshot%202026-04-04%20001132.png",
          alt: "StepPath weekly plan"
        },
        {
          src: "/assets/steppath/Screenshot%202026-04-06%20011527.png",
          alt: "StepPath live tracking"
        },
        {
          src: "/assets/steppath/Screenshot%202026-04-06%20021043.png",
          alt: "StepPath run summary"
        }
      ]
    }
  ];

  const experience = [
    {
      year: "Mar 2025 - Sep 2025",
      title: "Software Engineer Intern, PETRONAS",
      description:
        "Engineered a management system for Upstream and Downstream operations, supported CI/CD in Azure DevOps, and delivered scalable C# and Angular features within Agile sprints."
    },
    {
      year: "Jul 2024 - Oct 2024",
      title: "IT Technician, Imika Empire",
      description:
        "Managed branch infrastructure reliability and aligned technical troubleshooting with retail operations to sustain sales performance."
    },
    {
      year: "Mar 2021 - Sep 2021",
      title: "Business System Analyst, Flex Sdn Bhd",
      description:
        "Optimized CIM systems for high-volume manufacturing, ensuring real-time data synchronization and reliable 24/7 uptime."
    },
    {
      year: "Nov 2020 - Feb 2021",
      title: "Full Stack Developer Intern, SAINS",
      description:
        "Delivered internal management web apps from requirements to deployment with clean architecture and user-centric UI/UX."
    }
  ];

  const education = [
    {
      year: "2022 - 2026",
      title: "BSE (Hons) Software Engineering, UNIMAS",
      description: "CGPA: 3.19. Focused on software engineering practice, secure systems, and full stack application development."
    },
    {
      year: "2019 - 2022",
      title: "Diploma in Computer Science, UiTM",
      description: "CGPA: 3.26. Built a solid foundation in programming, databases, and system analysis."
    },
    {
      year: "2013 - 2017",
      title: "SPM (Science Stream), SMK Sook",
      description: "Science stream emphasizing mathematics and analytical problem solving."
    }
  ];

  const skillGroups = [
    {
      title: "Core Expertise",
      variant: "list",
      items: [
        "Full Stack Development",
        "Web Development",
        "Mobile Development",
        "System Architecture",
        "API Design & Integration",
        "Data Synchronization",
        "NLP & OCR Integration"
      ]
    },
    {
      title: "Security Focus",
      variant: "list",
      items: [
        "Secure SDLC (Agile/Scrum)",
        "API Security (JWT, OAuth)",
        "OWASP Top 10 Mitigations",
        "SQL Injection, CSRF/XSS Prevention",
        "Penetration Testing & Vulnerability Research",
        "Linux Security (SSH/Firewall)"
      ]
    },
    {
      title: "Tech Stack",
      variant: "tags",
      items: [
        "MERN",
        "LAMP",
        "C#",
        "C++",
        "Java",
        "PHP",
        "SQL",
        "Bootstrap",
        "Laravel",
        "Flutter",
        "Python",
        "Dart",
        "Angular",
        "Vue.js",
        "TypeScript",
        "Bash/Shell",
        "Node.js",
        "TensorFlow"
      ]
    },
    {
      title: "Tools & Platforms",
      variant: "tags",
      items: [
        "Android Studio",
        "Visual Studio Code",
        "Azure DevOps",
        "Firebase & Cloud Tech",
        "Postman & API Testing",
        "Git & Version Control",
        "Figma & Canva (UI/UX)"
      ]
    }
  ];

  const softSkills = [
    "Teamwork & Collaboration",
    "Adaptability & Flexibility",
    "Critical Thinking",
    "Problem Solving",
    "Communication",
    "Continuous Learning",
    "Project Management"
  ];

  const languages = [
    "Malay (Advanced)",
    "English (Advanced)",
    "Mandarin (Beginner)",
    "Iban (Beginner)"
  ];

  const achievements = [
    "2026 Finalist - Mobile App Competition 8.0 (FCSIT UNIMAS)",
    "2025 Speaker - Empowering Classroom Teaching with Gemini (Service Learning)",
    "2025 Participant - NASA International Space Apps Challenge",
    "2024 Finalist - Open Category Codennection 2023 (MMU)",
    "2023 Top 10 - Programming League National 2023 (UM)",
    "2023 Top 7 - IEEEXTREME 24-Hour Programming Competition",
    "2019 Runner-Up - Borneo International Drone and Robotics Explore (DROBOTEX)"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveIndex(0);
  };

  const handleNext = () => {
    if (!activeProject) return;
    setActiveIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const handlePrev = () => {
    if (!activeProject) return;
    setActiveIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  const activeImage = activeProject?.images[activeIndex];

  return (
    <main className="flex flex-col gap-24 pb-24 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-24"
      >
        <motion.section variants={itemVariants} className="container mx-auto px-4 pt-32">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {profile.title}
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight font-display">
                {profile.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {profile.summary}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{profile.location}</span>
                <span className="text-muted-foreground/40">•</span>
                <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
                  {profile.email}
                </a>
                <span className="text-muted-foreground/40">•</span>
                <a href={`tel:${profile.phone}`} className="hover:text-foreground transition-colors">
                  {profile.phone}
                </a>
                <span className="text-muted-foreground/40">•</span>
                <span>{profile.handle}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#projects">
                  <Button size="lg">View Portfolio</Button>
                </Link>
                <Link href="#contact">
                  <Button variant="secondary" size="lg">Contact</Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/niel.png"
                      alt="Niels Evant Robort portrait"
                      fill
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Based in</p>
                    <p className="text-lg font-semibold">Kuching, Sarawak</p>
                    <p className="text-sm text-muted-foreground">Available for full-time roles</p>
                  </div>
                </div>
              </Card>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <Card key={item.value} className="p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold mt-2">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} id="about" className="px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-semibold font-display">Profile</h2>
              <p className="text-muted-foreground mt-4">
                I design secure, AI-integrated products and enterprise systems that keep data reliable across web
                and mobile platforms. My work balances threat-aware engineering with clean architecture, helping
                teams ship dependable software in fast-paced Agile environments.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <Card key={group.title}>
                  <h3 className="text-lg font-semibold mb-4 font-display">{group.title}</h3>
                  {group.variant === "tags" ? (
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-xs rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="text-lg font-semibold mb-4 font-display">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-4 font-display">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center font-display">Experience</h3>
                <Timeline items={experience} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center font-display">Education</h3>
                <Timeline items={education} />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center font-display">Achievements</h3>
              <Card>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} id="projects" className="px-4 sm:px-6 lg:px-8 scroll-mt-24 bg-muted/40 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-semibold font-display">Selected Work</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                A focused set of my recent product builds across healthtech, civic tech, and enterprise
                operations, built with secure first principles and AI integrations. Each project reflects my commitment to resilient, user-centric software that delivers real-world impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="flex flex-col h-full">
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {project.period}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" className="w-full" onClick={() => openProject(project)}>
                    View Project
                  </Button>
                </Card>
              ))}
            </div>
            <div className="mt-10">
              <Card>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Additional Project</p>
                    <h3 className="text-lg font-semibold font-display mt-2">RoadSense</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dec 2024 - Mar 2025 · Crowdsourced civic-tech infrastructure monitoring system that maps
                      road degradation using sensor data and computer vision.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Flutter",
                      "Google Maps API",
                      "TensorFlow Lite",
                      "Firebase/Node.js",
                      "Accelerometer/Gyroscope"
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} id="contact" className="px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <Card className="p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-semibold font-display">Let us connect</h2>
                  <p className="text-muted-foreground mt-3 max-w-xl">
                    I am open to full stack and mobile development roles, collaborations, and speaking
                    engagements. Feel free to reach out for project discussions or opportunities.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href={`mailto:${profile.email}`} className="block hover:text-foreground transition-colors">
                    {profile.email}
                  </a>
                  <a href={`tel:${profile.phone}`} className="block hover:text-foreground transition-colors">
                    {profile.phone}
                  </a>
                  <span className="block">{profile.location}</span>
                  <div className="pt-4">
                    <a href={`mailto:${profile.email}`}>
                      <Button size="lg">Send an Email</Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>
      </motion.div>

      {activeProject && activeImage && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setActiveProject(null)} />
          <div className="relative mx-auto mt-16 mb-8 w-[92%] max-w-5xl">
            <div className="bg-background border border-border rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {activeProject.period}
                  </p>
                  <h3 className="text-xl font-semibold font-display">{activeProject.title}</h3>
                </div>
                <button
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] p-6">
                <div className="space-y-4">
                  <div className="relative w-full aspect-[9/16] sm:aspect-[4/3] lg:aspect-[16/10] bg-muted rounded-2xl overflow-hidden">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Screen {activeIndex + 1} of {activeProject.images.length}
                    </p>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 text-sm rounded-full border border-border text-foreground hover:border-primary/60 transition"
                        onClick={handlePrev}
                      >
                        Prev
                      </button>
                      <button
                        className="px-3 py-1 text-sm rounded-full border border-border text-foreground hover:border-primary/60 transition"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {activeProject.images.map((image, index) => (
                      <button
                        key={image.src}
                        className={`relative aspect-[4/5] rounded-lg overflow-hidden border ${
                          index === activeIndex ? "border-primary" : "border-border"
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Highlights</h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {activeProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {activeProject.stack.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

