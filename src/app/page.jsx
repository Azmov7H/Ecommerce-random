import style from './page.module.css'
import Hero from './components/Hero/Hero'

export default function page() {
  return (
    <div className={style.home}>
      <Hero />
    </div>
  )
}

