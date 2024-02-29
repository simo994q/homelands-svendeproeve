import React, { useEffect, useState, useContext } from 'react'
import style from './ReviewBox.module.scss'
import { getMonthString, getMonthAndYear } from '../../Helpers/helpers'
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../context/UserContextProvider'
import 'react-toastify/dist/ReactToastify.css';

export const ReviewBox = () => {

    const { user } = useContext(UserContext)

    const [reviews, setReviews] = useState()

    const [isOpen, setIsOpen] = useState(false)

    const [reviewInfo, setReviewInfo] = useState({ title: '', text: '' })

    useEffect(() => {
        fetch('https://api.mediehuset.net/homelands/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.items))
    }, [])

    const [reviewIndex, setReviewIndex] = useState(0)

    let int

    const changeFunc = () => {
        if (reviews) {
            if (reviewIndex === reviews.length - 1) {
                setReviewIndex(0)
            } else {
                setReviewIndex(reviewIndex + 1)
            }
            clearInterval(int)
        }
    }

    int = setInterval(changeFunc, 8000)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user) {
            if (reviewInfo.title != '' && reviewInfo.text != '') {
                sendReview()
            } else {
                toast('Udfyld alle felter')
            }
        } else {
            toast('Du skal være logget ind for at lave en andmeldelse')
        }

    }

    const sendReview = () => {

        const body = new URLSearchParams()

        body.append("title", reviewInfo.title)
        body.append("content", reviewInfo.text)
        body.append("user_id", user.id)
        body.append("active", true)
        body.append("num_stars", 5)

        const options = {
            method: 'POST',
            body: body,
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        fetch('https://api.mediehuset.net/homelands/reviews', options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <>
            <div className={style.wrapper}>
                {reviews ?
                    <>
                        <div className={style.pinkBox}>
                            <h3>{reviews[reviewIndex].title}</h3>
                            <p className={style.review}>"{reviews[reviewIndex].content}"</p>
                            <p>{reviews[reviewIndex].user.firstname} {reviews[reviewIndex].user.lastname}, {getMonthAndYear(reviews[reviewIndex].created_friendly)}</p>
                        </div>
                        { }
                        <div style={{ width: isOpen ? '100%' : 'fit-content' }} className={style.reviewBox}>
                            <img onClick={() => setIsOpen(!isOpen)} style={{ rotate: isOpen ? '180deg' : '0deg' }} src="/src/assets/arrow.svg" alt="" />
                            {isOpen ?
                                <>
                                    <div className={style.formWrapper}>
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            <div>
                                                <label htmlFor="title">Titel:</label>
                                                <input type="text" name="title" onChange={(e) => setReviewInfo({ ...reviewInfo, title: e.target.value })} />
                                            </div>
                                            <div>
                                                <label htmlFor="text">Anmeldelse:</label>
                                                <textarea name="text" rows={4} onChange={(e) => setReviewInfo({ ...reviewInfo, text: e.target.value })} />
                                            </div>
                                        </form>
                                        <button onClick={(e) => handleSubmit(e)}>Send</button>
                                    </div>
                                </>
                                :
                                <>

                                </>
                            }
                            <div></div>
                        </div>
                    </>
                    :
                    <>Loading...</>
                }
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    )
}
