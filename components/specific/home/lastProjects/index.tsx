import styles from './style.module.scss'
import { useEffect, useState, memo, useRef } from 'react'
import Image from 'next/image'
import LinkButton from 'components/utils/interactive/inputs/link'
import Link from 'next/link'
interface Project {
  src: string
  alt: string
  desc: string
  title: string
  href: string
}
var timer
var timer2
function LastProjects(props: { projects: Project[] }): JSX.Element {
  const { projects } = props
  const [currentProject, setCurrentProject] = useState({
    position: 0,
    project: {
      src: '/logoDefault.png',
      alt: '',
      desc: '',
      title: '',
      href: '',
    },
  })
  const isRef = useRef(null)
  const temporizer = () => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      let n = currentProject.position + 1

      setCurrentProject(() =>
        n >= projects.length
          ? { position: 0, project: projects[0] }
          : { position: n, project: projects[n] }
      )
    }, 6000)
  }
  const transitionProject = () => {
    isRef.current.classList.add(styles.anim)
    clearTimeout(timer2)
    timer2 = setTimeout(() => {
      isRef.current.classList.remove(styles.anim)
    }, 6000)
  }
  useEffect(() => {
    setCurrentProject({ position: 0, project: projects[0] })
    temporizer()
  }, [])
  useEffect(() => {
      transitionProject()
    temporizer()
  }, [currentProject])
  const selectProject = (n: number) => {
    clearTimeout(timer)

    setCurrentProject({ position: n, project: projects[n] })
    temporizer()
  }
  return (
    <div className={styles.component}>
      <div className={styles.lastProjects}>
        <h1>Ultimos proyectos en unirse.</h1>
        <p>
          Estas son las organizaciones que recientemente se han unido a{' '}
          <strong>gentem</strong>. ¿Qué estás esperando para ayudarlas?
        </p>
        <div className={styles.project}>
          <div className={styles.current} ref={isRef}>
            <div className={styles.img}>
              <img
                src={currentProject.project.src}
                width={150}
                height={150}
                alt={currentProject.project.alt}
                className={styles.image}
              />
            </div>
            <h3>{currentProject.project.title}</h3>
            <span>{currentProject.project.desc}</span>
            <LinkButton
              href={currentProject.project.href}
              label="Apoyala"
              className="border"
              size="m"
            />
          </div>

          <div className={styles.list}>
            {projects.map((res, index) => (
              <Item
                src={res.src}
                alt={res.alt}
                current={currentProject.position}
                id={index}
                key={index}
                selectProject={selectProject}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
function Item(props: {
  src: string
  alt: string
  selectProject?: Function
  id: number
  current: number
}): JSX.Element {
  const { src, alt, selectProject, id, current } = props
  const isCurrent = id === current ? true : false
  return (
    <div
      className={isCurrent ? `${styles.item} ${styles.active}` : styles.item}
      onClick={() => {
        selectProject(id)
      }}
    >
      <img width={48} height={48} src={src} alt={alt} className={styles.i} />
    </div>
  )
}
export default memo(LastProjects)
