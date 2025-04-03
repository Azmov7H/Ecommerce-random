import style from './Hero.module.css';
import Image from 'next/image';



export default function Hero() {
  return (
    <div className={style.hero}>
        <div className={style.img}>
        <Image
          src="/shop-for-rent-svgrepo-com.svg"
          width={150}
          height={150}
          alt="Nout Found"
        />
      </div>
      <div className={style.text}>
        <div className={style.titl}>
          <h2>
            مرحباً بكم في شركة <span>الرضا</span>
          </h2>
        </div>
        <div className={style.pragrf}>
          <p>
            جميع المعادن الحديثة لتجهيز المنازل على أعلى طراز
          </p>
        </div>

        <button className={style.button}>ابدأ التسوق</button>
        <div className={style.icon}>
            <Image src={'/facebook-color-svgrepo-com.svg'} width={20} height={20} alt='nout found'></Image>
            <Image src={'/whatsapp-color-svgrepo-com.svg'} width={20} height={20} alt='nout found'></Image>
            <Image src={'/telegram-svgrepo-com.svg'} width={20} height={20} alt='nout found'></Image>
        </div>
      </div>

    </div>
  );
}
