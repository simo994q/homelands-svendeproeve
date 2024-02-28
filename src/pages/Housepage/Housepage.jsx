import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import style from './Housepage.module.scss'
import { Hero } from '../../components/Hero/Hero'

export const Housepage = () => {

    const [houseInfo, setHouseInfo] = useState()
    const [houseImages, setHouseImages] = useState()

    const { id } = new useParams()

    useEffect(() => {
        fetch(`https://api.mediehuset.net/homelands/homes/${id}`)
            .then(res => res.json())
            .then(data => setHouseInfo(data.item))
    }, [])

    useEffect(() => {
        if (houseInfo) {
            let imgs = []
            houseInfo.images.map((img) => {
                imgs.push(img.filename.large)
            })
            setHouseImages(imgs)
        }
    }, [houseInfo])
    console.log(houseInfo);
    return (
        <>
            <div className={style.heroWrapper}>
                <Header />
                {houseImages ?
                    <Hero images={houseImages} />
                    :
                    <>Loading...</>
                }

            </div>

            <div className={style.houseWrapper}>

                {houseInfo ?
                    <>
                        <div className={style.overview}>
                            <div className={style.title}>
                                <h1>{houseInfo.address}</h1>
                                <div className={style.smallInfo}>
                                    <p>{houseInfo.type}</p>
                                    <p>{houseInfo.floor_space}m²</p>
                                    <p>{houseInfo.num_rooms} værelser</p>
                                </div>
                                <p></p>
                                <p></p>
                            </div>
                            <div className={style.images}>
                                <img src="/src/assets/camera.png" alt="" />
                                <img src="/src/assets/floorplan.png" alt="" />
                                <img src="/src/assets/location.png" alt="" />
                                <img src="/src/assets/heart.png" alt="" />
                            </div>
                            <div className={style.prices}>
                                <p>Kontantpris <span>{Number(houseInfo.price).toLocaleString()}</span></p>
                                <p>Udbetaling {Number(houseInfo.payout).toLocaleString()}</p>
                                <p>Ejerudgift per måned {Number(houseInfo.cost).toLocaleString()}</p>
                            </div>
                        </div>


                        <div className={style.info}>

                        </div>


                        <div className={style.description}>

                        </div>
                    </>
                    :
                    <>Loading house...</>
                }

            </div>
        </>
    )
}
