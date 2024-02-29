import React from 'react'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import style from './Frontpage.module.scss'
import { HouseCard } from '../../components/HouseCard/HouseCard'
import data from '../../assets/data.json'
import { ReviewBox } from '../../components/ReviewBox/ReviewBox'

export const Frontpage = () => {

    const images = [
        "https://api.mediehuset.net/images/homelands/large/house-1.jpg",
        "https://api.mediehuset.net/images/homelands/large/house-2.jpg",
        "https://api.mediehuset.net/images/homelands/large/apartment-2.jpg"
    ]

    return (
        <>
            <div className={style.heroWrapper}>
                <Header />
                <Hero images={images} />
            </div>
            <div className={style.selectedHouses}>
                <HouseCard houseData={data[0]} />
                <HouseCard houseData={data[1]} />
                <HouseCard houseData={data[2]} />
            </div>
            <h2 style={{ textAlign: 'center' }}>Det siger kunderne:</h2>
            <ReviewBox />
        </>
    )
}
