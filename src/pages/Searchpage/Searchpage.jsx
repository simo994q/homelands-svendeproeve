import React, { useEffect, useState } from 'react'
import style from './Searchpage.module.scss'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { HouseCard } from '../../components/HouseCard/HouseCard'

export const Searchpage = () => {

  const { query } = new useParams()

  const [houses, setHouses] = useState()

  useEffect(() => {
    fetch(`https://api.mediehuset.net/homelands/search/${query}`)
      .then(res => res.json())
      .then(data => setHouses(data))
  }, [query])

  console.log(houses);

  return (
    <>
      <Header />
      <h1 style={{ marginBottom: '100px' }}>???</h1>
      <div className={style.wrapper}>
        {houses ?
          <>
            {houses.status ?
              <>
                <h1>Din søgning gav {houses.num_items} resultater</h1>
                <div className={style.houses}>
                  {houses.items.map((house, i) => {
                    return <HouseCard key={i} houseData={house} />
                  })}
                </div>
              </>
              :
              <>
                <h1>Din søgning gav ingen resultater</h1>
              </>
            }
          </>
          :
          <></>
        }
      </div>
    </>
  )
}
