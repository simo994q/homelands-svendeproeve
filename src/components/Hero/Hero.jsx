import React, { useState } from 'react'
import style from './Hero.module.scss'

export const Hero = ({images}) => {

  const [imgIndex, setImgIndex] = useState(0)

  let int

  const changeFunc = () => {
    if (imgIndex === images.length - 1) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
    }
    clearInterval(int)
  }

  int = setInterval(changeFunc, 5000)


  return (
    <>
      <div className={style.wrapper}>
        <img src={images[imgIndex]} alt="" className={style.carouselImg} />
      </div>
    </>
  )
}
