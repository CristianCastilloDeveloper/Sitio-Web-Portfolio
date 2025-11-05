import { ServerHeroSection } from "@/components/server-hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { AboutSectionClient } from "@/components/about-section-client"
import { MouseFollowBackground } from "@/components/mouse-follow-background"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"
import resumeData from "@/data/resume-data"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <MouseFollowBackground />
        </div>

        <div className="container h-full flex flex-col py-16">
          <div className="animate-fade-in-up">
            <ServerHeroSection />
          </div>

          <div className="mt-16 pt-16 border-t border-border/50 w-full animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-sm hover-lift">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Sobre Mí
              </h2>
            </div>
            <AboutSectionClient summary={resumeData.summary} />
          </div>

          <div className="mt-24 w-full animate-fade-in-up delay-400">
            <FeaturedProjects />
          </div>
        </div>
      </div>
    </div>
  )
}
