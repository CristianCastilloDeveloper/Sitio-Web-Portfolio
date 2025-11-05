import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { MouseFollowBackground } from "@/components/mouse-follow-background"
import { ContactPageClient } from "./ContactPageClient"
import resumeData from "@/data/resume-data"

export const metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${resumeData.personalInfo.name} para oportunidades, colaboraciones o simplemente para saludar.`,
}

export default function ContactPage() {
  // Ensure we have the personal info data with fallbacks
  const email = resumeData?.personalInfo?.email || ""
  const location = resumeData?.personalInfo?.location || ""
  const github = resumeData?.personalInfo?.github || ""
  const linkedin = resumeData?.personalInfo?.linkedin || ""

  return (
    <ContactPageClient>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10">
          <MouseFollowBackground />
        </div>
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div>
              <h1 className="text-4xl font-bold mb-4">Contáctame</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ponte en contacto para oportunidades, colaboraciones o simplemente para saludar
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-zinc-900/50 border-zinc-800/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-white mt-0.5" />
                      <div>
                        <p className="font-medium">Correo Electrónico</p>
                        <a href={`mailto:${email}`} className="text-zinc-400 hover:text-white">
                          {email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-white mt-0.5" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <a href={`tel:${resumeData.personalInfo.phone}`} className="text-zinc-400 hover:text-white">
                          {resumeData.personalInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Conéctate Conmigo</h2>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`https://${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </Link>
                    <Link
                      href={`https://${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Link>
                    <Link
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      Email
                    </Link>
                    <Link
                      href="https://wa.me/56978117158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ContactPageClient>
  )
}
