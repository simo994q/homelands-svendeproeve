import React from 'react'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import style from './Frontpage.module.scss'

export const Frontpage = () => {
    return (
        <>
            <div className={style.heroWrapper}>
                <Header />
                <Hero />
            </div>
        </>
    )
}
