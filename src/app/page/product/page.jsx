'use client';

import { useEffect, useState } from 'react';
import style from './page.module.css';
import Image from 'next/image';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://dummyjson.com/products';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('فشل في تحميل البيانات');
        }
        const data = await response.json();
        console.log('Response Data:', data);

        if (data && data.products) {
          setProducts(data.products); // استخراج المنتجات من الكائن
        } else {
          setProducts([]);
          setError('لم يتم العثور على منتجات.');
        }
      } catch (err) {
        setError('حدث خطأ أثناء تحميل البيانات: ' + err.message);
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.prodact}>
      <div className={style.title}>منتجات </div>
      <div className={style.cards}>
        {loading && <p>جاري تحميل المنتجات...</p>}
        {error && <p className={style.error}>{error}</p>}
        {!loading && products.length === 0 && (
          <p>لم يتم العثور على منتجات.</p>
        )}
        {products.map((product, index) => (
          <div key={index} className={style.card}>
            <Image
              src={product.thumbnail} // استخدام الصورة المصغرة بدلاً من الحقل image
              width={150}
              height={150}
              alt={product.title || 'صورة المنتج'}
            />
            <h3>{product.title.slice(0, 10) || 'منتج مجهول'}</h3>
            <p><span>{product.price || 'غير متوفر'}.EG</span> : السعر</p>
            <p>{product.description.slice(0, 80) || 'لا توجد مراجعة مكتوبة.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
