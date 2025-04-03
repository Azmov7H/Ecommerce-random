import React from 'react'
import Image from 'next/image';


export default function But(props) {
  return (
    <div className={props.name}>
    <Image src={'/hamburger-svgrepo-com.svg'} width={40} height={40} alt='Not Found'></Image>
  </div>
  )
}
