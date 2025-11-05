import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            Desarrollado con pasión y dedicación.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/CristianCastilloDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/cristian-castillo-molina-547bb79b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:cristiancastillo2055@gmail.com"
            className="text-muted-foreground hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://wa.me/56978117158"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
