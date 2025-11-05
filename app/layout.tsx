import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: {
    default: "Cristian Castillo | Senior .NET Developer",
    template: "%s | Cristian Castillo",
  },
  description:
    "Senior .NET Developer especializado en desarrollo full stack con .NET, JavaScript, SQL Server y APIs.",
  keywords: ["Software Engineer", ".NET Developer", "Full Stack", "JavaScript", "SQL Server", "APIs", "Cristian Castillo"],
  authors: [{ name: "Cristian Castillo Molina" }],
  creator: "Cristian Castillo Molina",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://cristiancastillo.com",
    title: "Cristian Castillo | Senior .NET Developer",
    description:
      "Senior .NET Developer especializado en desarrollo full stack con .NET, JavaScript, SQL Server y APIs.",
    siteName: "Cristian Castillo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Castillo | Senior .NET Developer",
    description:
      "Senior .NET Developer especializado en desarrollo full stack con .NET, JavaScript, SQL Server y APIs.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
