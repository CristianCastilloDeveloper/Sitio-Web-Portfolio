import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, User } from "lucide-react"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { MouseFollowBackground } from "@/components/mouse-follow-background"
import resumeData from "@/data/resume-data"

export const metadata = {
  title: "Currículum",
  description: `Experiencia profesional, habilidades y cualificaciones de ${resumeData.personalInfo.name}, ${resumeData.personalInfo.title}.`,
}

export default function ResumePage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <MouseFollowBackground />
      </div>
      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-4xl font-bold">Currículum</h1>
                <p className="text-xl text-muted-foreground">Mi experiencia profesional y cualificaciones</p>
              </div>
              <ResumeDownloadButton />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Resumen</h2>
              <p className="text-justify">
                {resumeData.personalInfo.yearsOfExperience} and {resumeData.personalInfo.teamLeadExperience}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Experiencia Laboral</h2>

              {resumeData.experience.map((job, index) => (
                <Card key={index} className={`card-hover transition-smooth stagger-${Math.min(index + 1, 6)}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-2 md:flex-row">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-justify">{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Habilidades</h2>
              <Card className="card-hover transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold">Lenguajes y Frameworks</h3>
                    <p className="text-muted-foreground">{resumeData.skills.languages.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Arquitectura y Patrones</h3>
                    <p className="text-muted-foreground">{resumeData.skills.architecture.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cloud y DevOps</h3>
                    <p className="text-muted-foreground">{resumeData.skills.cloud.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bases de Datos</h3>
                    <p className="text-muted-foreground">{resumeData.skills.data.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Calidad</h3>
                    <p className="text-muted-foreground">{resumeData.skills.quality.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Add languages section here */}
            {resumeData.languages && resumeData.languages.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Idiomas</h2>
                <Card className="card-hover transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    {resumeData.languages.map((lang, index) => (
                      <div key={index}>
                        <h3 className="font-semibold">{lang.name}</h3>
                        <p className="text-muted-foreground">
                          {lang.level}
                          {lang.certificate && ` (${lang.certificate})`}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="sticky top-20">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={resumeData.personalInfo.photo || "/images/profile.png"}
                  alt={resumeData.personalInfo.name}
                  width={300}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>{resumeData.personalInfo.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>{resumeData.personalInfo.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    LinkedIn
                  </Link>
                </div>
                {resumeData.personalInfo.github && (
                  <div className="flex items-center gap-2">
                    <Link href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      GitHub
                    </Link>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full">Contactar</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
