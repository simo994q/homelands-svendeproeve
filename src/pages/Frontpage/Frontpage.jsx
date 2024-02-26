import React from 'react'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import style from './Frontpage.module.scss'
import { HouseCard } from '../../components/HouseCard/HouseCard'
import data from '../../assets/data.json'

export const Frontpage = () => {
    return (
        <>
            <div className={style.heroWrapper}>
                <Header />
                <Hero />
            </div>
            <div className={style.selectedHouses}>
                <HouseCard houseData={data[0]} />
                <HouseCard houseData={data[1]} />
                <HouseCard houseData={data[2]} />
            </div>
        </>
    )
}
