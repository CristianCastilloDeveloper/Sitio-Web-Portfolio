export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Education = {
  degree: string
  institution: string
  year: string
  details: string[]
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    location: string
    phone: string
    linkedin: string
    github: string | null
    website: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
    birthDate: string
    birthPlace: string
    civilStatus: string
    drivingLicense: string
  }
  summary: string[]
  skills: {
    languages: string[]
    architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  education: {
    degree: string
    institution: string
    year: string
    details: string[]
  }[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Cristian Alberto Castillo Molina",
    title: "Senior .NET Developer | Fullstack JavaScript | SQL Server & APIs",
    email: "cristiancastillo2055@gmail.com",
    location: "",
    phone: "+56 (9) 54403638",
    linkedin: "https://www.linkedin.com/in/cristian-castillo-molina-547bb79b/",
    github: "https://github.com/CristianCastilloDeveloper",
    website: "",
    photo: "/Sitio-Web-Portfolio/images/profile.png",
    yearsOfExperience: "7+ años de experiencia en desarrollo de software",
    teamLeadExperience: "Experiencia liderando proyectos como Software Developer .NET Senior",
    birthDate: "15 de noviembre de 1992",
    birthPlace: "México",
    civilStatus: "Casado, con hijos",
    drivingLicense: "Automóvil y Motocicleta (B y C)"
  },
  summary: [
    "Profesional con más de 7 años de experiencia especializado en el análisis, diseño y desarrollo de sistemas informáticos complejos. Mi trayectoria profesional se ha centrado en la creación de soluciones robustas y escalables utilizando tecnologías del ecosistema .NET, JavaScript y bases de datos relacionales y no relacionales.",
    "Actualmente me desempeño como Software Developer .NET Senior en Imagemaker, donde lidero la migración de sistemas legacy hacia arquitecturas modernas basadas en .NET Core 8, aplicando principios de Clean Architecture y orientación a microservicios. Mi experiencia incluye el diseño e implementación de soluciones en la nube utilizando Microsoft Azure, trabajando con servicios como App Services, Azure SQL, DevOps y Pipelines.",
    "A lo largo de mi carrera, he desarrollado una sólida experiencia en el desarrollo full stack. En el backend, domino .NET Framework, .NET Core y C#, mientras que en el frontend tengo amplia experiencia con JavaScript moderno (ES6+), TypeScript, React para construcción de interfaces de usuario interactivas y Node.js para desarrollo de servicios del lado del servidor. He implementado arquitecturas escalables utilizando React con patrones de diseño modernos y gestión de estado, así como APIs REST con Node.js y Express.",
    "En cuanto a bases de datos, tengo experiencia trabajando tanto con SQL Server (diseño de bases de datos, stored procedures complejos, optimización de consultas T-SQL) como con bases de datos NoSQL como MongoDB, permitiéndome elegir la solución más adecuada según los requisitos del proyecto. He trabajado en proyectos que requieren la integración de múltiples fuentes de datos, asegurando la consistencia y el rendimiento óptimo.",
    "Mi enfoque se caracteriza por la entrega de resultados sobresalientes, respaldado por habilidades como comunicación efectiva, trabajo colaborativo y una actitud proactiva hacia los desafíos laborales. Tengo experiencia liderando equipos, gestionando proyectos bajo metodologías ágiles (Scrum), y asegurando el cumplimiento de plazos y objetivos sin comprometer la calidad del código.",
    "Me apasiona mantenerme actualizado con las últimas tecnologías y mejores prácticas de desarrollo, implementando patrones de diseño, arquitecturas limpias y garantizando la calidad del software mediante testing (xUnit, Jest), pruebas de APIs (Postman, SoapUI) y CI/CD con Azure DevOps y GitHub Actions."
  ],
  skills: {
    languages: [".NET Framework", ".NET Core", "C#", "PHP (Laravel)", "JavaScript (ES6+)", "TypeScript", "Node.js", "React", "Express"],
    architecture: ["Clean Architecture", "Microservicios", "APIs REST", "SOAP", "GraphQL", "MVC", "MVVM"],
    cloud: ["Microsoft Azure", "AWS", "Azure DevOps", "Git"],
    data: ["SQL Server", "MySQL", "MariaDB", "PostgreSQL", "MongoDB", "T-SQL", "Stored Procedures"],
    quality: ["Testing", "xUnit", "Jest", "Postman", "SoapUI", "CI/CD"],
  },
  experience: [
    {
      title: "Software Developer .NET Senior",
      company: "Imagemaker",
      period: "Abril 2025 - Presente",
      location: "Chile",
      responsibilities: [
        "Desarrollo y migración de una API legacy hacia .NET Core 8, aplicando principios de arquitectura limpia y orientación a microservicios.",
        "Implementación de soluciones en la nube utilizando Microsoft Azure (App Services, Azure SQL, DevOps, Pipelines).",
        "Colaboración en equipo ágil bajo metodología Scrum, participando activamente en ceremonias y contribuyendo al cumplimiento de objetivos.",
        "Integración y consumo de servicios REST, optimización de endpoints y manejo de bases de datos relacionales.",
        "Participación en decisiones técnicas clave, apoyando en la modernización tecnológica y buenas prácticas.",
      ],
    },
    {
      title: "Analista Programador Senior",
      company: "Serviphar",
      period: "Febrero 2024 - Diciembre 2024",
      location: "Chile",
      responsibilities: [
        "Desarrollo y mantenimiento de sistemas informáticos, con foco en la gestión de proyectos y liderazgo de equipos.",
        "Especialista en análisis de requerimientos y diseño de soluciones escalables.",
        "Manejo de metodologías ágiles para optimizar procesos y calidad.",
        "Aseguramiento del cumplimiento de plazos y objetivos del proyecto.",
      ],
    },
    {
      title: "Analista Programador Senior",
      company: "G-Talent",
      period: "Julio 2021 - Febrero 2024",
      location: "Chile",
      responsibilities: [
        "Diseño, desarrollo y mantenimiento de sistemas web en .NET y C#, integrando soluciones con SQL Server y servicios SOAP/REST conectados a SAP.",
        "Implementación de sitio de cotizaciones en React con arquitectura escalable.",
        "Realización de pruebas de APIs con Postman y SoapUI para garantizar calidad y rendimiento.",
        "Colaboración en proyectos multidisciplinarios, cumpliendo plazos y requerimientos del cliente.",
      ],
    },
    {
      title: "Encargado área informática",
      company: "S&E Consultores Ltda.",
      period: "Diciembre 2018 - Julio 2021",
      location: "Chile",
      responsibilities: [
        "Toma de decisiones para mejora y mantenimiento de infraestructura informática.",
        "Gestión de servidores, equipos y control de activos.",
        "Desarrollo e implementación de arquitecturas de respaldo de información.",
        "Modelado e implementación de redes, configuración de grupos de equipos.",
      ],
    },
    {
      title: "Analista programador",
      company: "FRAX Biometría Ltda.",
      period: "Diciembre 2017 - Diciembre 2018",
      location: "Chile",
      responsibilities: [
        "Desarrollo de software para control de personal mediante biometría con Visual Basic.",
        "Soporte técnico remoto para resolución de problemas y dudas sobre el software.",
        "Instalación y configuración de dispositivos de lectura biométrica y software asociado.",
      ],
    },
  ],
  hardSkills: [
    "Desarrollo Web Full Stack",
    "Arquitectura de Software",
    "Gestión de Bases de Datos",
    "DevOps y CI/CD",
    "Metodologías Ágiles"
  ],
  softSkills: [
    "Liderazgo de Equipos",
    "Comunicación Efectiva",
    "Trabajo Colaborativo",
    "Resolución de Problemas",
    "Actitud Proactiva"
  ],
  languages: [
    {
      name: "Español",
      level: "Nativo"
    },
    {
      name: "Inglés",
      level: "A2"
    }
  ],
  education: [
    {
      degree: "Ingeniería en informática",
      institution: "Universidad Tecnológica de Chile INACAP",
      year: "2017",
      details: [
        "Titulado con tesis: 'Diseño de optimización del sistema de trazabilidad del procesamiento del calamar gigante para la empresa CHPL.'",
        "Práctica profesional realizada en FRAX Biometría"
      ]
    }
  ]
}

export default resumeData
