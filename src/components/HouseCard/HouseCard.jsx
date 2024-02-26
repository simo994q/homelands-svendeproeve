import React from 'react'
import style from './HouseCard.module.scss'

export const HouseCard = ({ houseData }) => {
    console.log(houseData);

    const {address, zipcode, city, type, energy_label_name, price, floor_space, num_rooms  } = houseData
    const img = houseData.images[0].filename.large

    const isFavorited = () => {
        return false
    }

    return (
        <>
            <div className={style.wrapper}>
                <img src={img} alt="" className={style.houseImg} />
                <div className={style.titleAndFav}>
                    <h1>{address}</h1>
                    <img src={isFavorited() ? '/src/assets/Faved.svg' : '/src/assets/Fav.svg' } alt="" />
                </div>
                <h2 className={style.zip}>{zipcode} {city}</h2>
                <h3 className={style.type}>{type}</h3>
                <div className={style.EnergyInfoPrice}>
                    <div className={style.energyDiv}>
                        <h4>{energy_label_name}</h4>
                        <p>{num_rooms} værelser, {floor_space} m²</p>
                    </div>
                    <p className={style.price}>{Number(price).toLocaleString()} DKK</p>
                </div>
            </div>
        </>
    )
}
