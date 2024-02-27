import React, { useContext } from 'react'
import style from './HouseCard.module.scss'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';

export const HouseCard = ({ houseData }) => {

    const { user, setUser } = useContext(UserContext)

    const { id, address, zipcode, city, type, energy_label_name, price, floor_space, num_rooms } = houseData
    const img = houseData.images[0].filename.large

    const isFavorited = () => {
        return false
    }

    const energyColor = (value) => {
        switch (value) {
            case 'A':
                return '#88C540'
            case 'B':
                return '#74A634'
            case 'C':
                return '#74A634'
            case 'D':
                return '#D27E17'
            case 'E':
                return '#CB4C23'
        }
    }

    return (
        <>
            <div className={style.wrapper}>
                <img src={img} alt="" className={style.houseImg} />
                <div className={style.titleAndFav}>
                    <h1><NavLink to={`/houses/${id}`}>{address}</NavLink></h1>
                    {user ?
                        <img src={isFavorited() ? '/src/assets/Faved.svg' : '/src/assets/Fav.svg'} alt="" />
                        :
                        <></>
                    }
                    {/* <img src={isFavorited() ? '/src/assets/Faved.svg' : '/src/assets/Fav.svg'} alt="" /> */}
                </div>
                <h2 className={style.zip}>{zipcode} {city}</h2>
                <h3 className={style.type}>{type}</h3>
                <div className={style.EnergyInfoPrice}>
                    <div className={style.energyDiv}>
                        <h4 style={{ backgroundColor: energyColor(energy_label_name) }}>{energy_label_name}</h4>
                        <p>{num_rooms} værelser, {floor_space} m²</p>
                    </div>
                    <p className={style.price}>{Number(price).toLocaleString()} DKK</p>
                </div>
            </div>
        </>
    )
}
