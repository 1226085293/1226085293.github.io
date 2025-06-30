interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '标题',
    description: `项目说明`,
    imgSrc: '/static/images/old/google.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
