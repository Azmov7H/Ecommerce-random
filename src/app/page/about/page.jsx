import style from './page.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <div className={style.about}>
      <h1>
        <span>شركة الرضا</span>
      </h1>
      <p>
        شركة الرضا تُعد من الشركات الرائدة في مجال المعادن الحديثة، حيث تركز على تقديم حلول متقدمة تتماشى مع أحدث التقنيات
        العالمية. تتميز الشركة بتقديم منتجات عالية الجودة تلبي احتياجات مجموعة متنوعة من الصناعات. تقيم الشركة العديد من
        الشراكات مع كبرى شركات التصنيع، مما يُسهم في تعزيز الابتكار وتحقيق قيمة مضافة للعملاء. تشمل هذه الشراكات:
      </p>
      <div className={style.img}>
        <Image src='/b-ahrm.png' alt='Ahram' width={50} height={50} />
        <Image src='/comex.png' alt='Comex' width={70} height={30} />
        <Image src='/e.png' alt='EI' width={50} height={50} />
      </div>
    </div>
  );
}
