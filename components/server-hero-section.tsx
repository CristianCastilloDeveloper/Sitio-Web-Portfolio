import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import resumeData from "@/data/resume-data"

export function ServerHeroSection() {
  return (
    <div className="grid lg:grid-cols-[1fr_auto] items-start gap-12 lg:gap-16">
      <div className="flex flex-col space-y-6">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{resumeData.personalInfo.name}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xl">{resumeData.personalInfo.title}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/resume" className="animate-fade-in-up delay-100">
            <Button size="lg" className="hover-lift">Ver Currículum</Button>
          </Link>
          <Link href="/contact" className="animate-fade-in-up delay-200">
            <Button variant="outline" size="lg" className="hover-lift">
              Contactar
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 animate-fade-in-up delay-300">
          <Link
            href={`https://${resumeData.personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-lift"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={`https://${resumeData.personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-lift"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${resumeData.personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-lift"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://wa.me/56978117158"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover-lift"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
      </div>

      <div className="flex items-start justify-center lg:justify-end pt-1">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-border">
          <Image
            src="/Sitio-Web-Portfolio/images/profile.png"
            alt={resumeData.personalInfo.name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}
