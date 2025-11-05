export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
}

// Agrega tus proyectos aquí siguiendo este formato:
// {
//   id: 1,
//   title: "Nombre del Proyecto",
//   description: "Descripción del proyecto",
//   image: "URL de la imagen o null",
//   tags: ["Tecnología1", "Tecnología2", "Tecnología3"],
//   github: "URL del repositorio de GitHub",
//   demo: "URL de la demo o null si no tiene"
// }

const projects: Project[] = [
  // Ejemplo de cómo agregar un proyecto:
  // {
  //   id: 1,
  //   title: "Sistema de Gestión",
  //   description: "Sistema completo de gestión empresarial desarrollado con .NET Core y React",
  //   image: "/images/proyecto1.png",
  //   tags: [".NET Core", "React", "SQL Server"],
  //   github: "https://github.com/tuusuario/proyecto1",
  //   demo: "https://demo.tuproyecto.com"
  // },
]

// Los primeros 3 proyectos se mostrarán como destacados en la página principal
export const featuredProjects = projects.slice(0, 3)

export default {
  projects,
  featuredProjects,
}
