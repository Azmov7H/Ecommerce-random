import style from './page.module.css'

export default function page() {
  return (
    <div className={style.contact}>
      <div className={style.title}>
        <h3><span>للتواصل </span></h3>
      </div>
      <div className={style.contact_ues}>
        <strong>Phone    : <span>0867532675</span></strong>
        <strong>Email    : <span>elrade2000@gmail.com</span></strong>
        <strong>Wahtsapp : <span>www.wahtsapp.com</span></strong>
        <strong>Facebook : <span>www.facebook.com</span></strong>
      </div>
      <br />
      <div className={style.rejactad}>
        <p> لتقديم الشكاوي و الاقتراحات لتحديث الخدمة يمكنكم التقديم عبر </p>
        <strong>www.elrade.com</strong>
      </div>
    </div>
  )
}
