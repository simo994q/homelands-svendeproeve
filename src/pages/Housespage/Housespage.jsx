import React, { useEffect, useState } from 'react'
import style from './Housespage.module.scss'
import { Header } from '../../components/Header/Header'
import { HouseCard } from '../../components/HouseCard/HouseCard'

export const Housespage = () => {

    const [houses, setHouses] = useState()

    const [sortPrice, setSortPrice] = useState()
    const [sortedHouses, setSortedHouses] = useState()

    useEffect(() => {
        fetch('https://api.mediehuset.net/homelands/homes')
            .then(res => res.json())
            .then(data => setHouses(data.items))
    }, [])

    useEffect(() => {
        if (houses) {
            function compare(a, b) {
                if (Number(a.price) < Number(b.price)) {
                    return -1;
                }
                if (Number(a.price) > Number(b.price)) {
                    return 1;
                }
                return 0;
            }

            const sortedLowToHigh = houses.sort(compare);
            setSortPrice({ lowest: sortedLowToHigh[0], highest: sortedLowToHigh[sortedLowToHigh.length - 1], current: sortedLowToHigh[sortedLowToHigh.length - 1].price })
        }
    }, [houses])

    useEffect(() => {
        if (houses && sortPrice.current) {
            let sorted = []
            houses.map((house) => {
                if (Number(house.price) <= Number(sortPrice.current)) {
                    sorted.push(house)
                }
            })
            setSortedHouses(sorted)
        }
    }, [sortPrice])

    return (
        <>
            <Header />
            <h1 style={{ marginBottom: '100px' }}>???</h1>

            <div className={style.wrapper}>
                <div className={style.topLine}>
                    <h1>Boliger til salg</h1>
                    <div className={style.sortings}>
                        <div className={style.range}>
                            {sortPrice ?
                                <>
                                    <p>Max pris:</p>
                                    <input step="2000" onChange={(e) => setSortPrice({ ...sortPrice, current: e.target.value })} defaultValue={sortPrice.highest.price} type="range" min={sortPrice.lowest.price} max={sortPrice.highest.price} />
                                    <p>{sortPrice.current}</p>
                                </>
                                :
                                <p>Loading...</p>
                            }
                        </div>
                        <select>
                            <option value="">Villa</option>
                            <option value="">Ejerlejlighed</option>
                            <option value="">Andelsbolig</option>
                        </select>
                    </div>
                </div>
                <div className={style.houses}>
                    {sortedHouses ?
                        sortedHouses ?
                            sortedHouses.map((house, i) => {
                                return <HouseCard key={i} houseData={house} />
                            })
                            :
                            <>
                                Loading houses...
                            </>
                        :
                        houses ?
                            houses.map((house, i) => {
                                return <HouseCard key={i} houseData={house} />
                            })
                            :
                            <>
                                Loading houses...
                            </>
                    }

                </div>
            </div>
        </>
    )
}
