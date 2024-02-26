import React, { useEffect, useState } from 'react'
import style from './Housespage.module.scss'
import { Header } from '../../components/Header/Header'

export const Housespage = () => {

    const [houses, setHouses] = useState()

    useEffect(() => {
        fetch('https://api.mediehuset.net/homelands/homes')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    console.log(houses)

    useEffect(() => {
        if (houses) {
            houses.items.reduce(function (prev, curr) {
                return prev.price < curr.price ? prev : curr;
            });

            console.log(houses);
        }

    }, [houses])

    return (
        <>
            <Header />
            <h1 style={{ marginBottom: '100px' }}>???</h1>

            <div className={style.wrapper}>
                <div>
                    <h1>Boliger til salg</h1>
                    <div>
                        <p>Sorter efter prisniveau</p>
                        <input type="range" min="0" max="10" />
                        <select>
                            <option value="">Villa</option>
                            <option value="">Ejerlejlighed</option>
                            <option value="">Andelsbolig</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
