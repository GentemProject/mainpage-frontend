import Link from 'next/link'
import styles from './style.module.scss'
function LinkButton(props: {
  className: string
  size: string
  icon?: JSX.Element
  href: string
  label: string
  color?: { color?: string; backgroundColor?: string; borderColor?: string }
}) {
  const { className, size, icon, href, label, color } = props
  return (
    <Link href={href}>
      <div
        className={`${styles.link} ${styles[className]} ${styles[size]}`}
        style={color}
      >
        <span style={{ color: color !== undefined && color.color }}>
          {label}
        </span>
        {icon && icon}
      </div>
    </Link>
  )
}
export default LinkButton
