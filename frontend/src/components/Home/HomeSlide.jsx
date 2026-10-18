import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './HomeSlide.module.css'
import ironman from '../../assets/HomeSlide/ironman.jpg'
import cars from '../../assets/HomeSlide/car.jpg'
import spiderman from '../../assets/HomeSlide/Spiderman.jpg'
import black from '../../assets/HomeSlide/black.jpg'
import stranger from '../../assets/HomeSlide/stranger.jpg'
import blade from '../../assets/HomeSlide/blade.jpg'
import Doreamon from '../../assets/HomeSlide/Doreamon.jpg'
import loki from '../../assets/HomeSlide/loki.jpg'
import slide1 from '../../assets/HomeSlide2/slide1.jpg'
import slide2 from '../../assets/HomeSlide2/slide2.jpg'
import slide3 from '../../assets/HomeSlide2/slide3.jpg'
import slide4 from '../../assets/HomeSlide2/slide4.jpg'
import slide5 from '../../assets/HomeSlide2/slide5.jpg'
import slide6 from '../../assets/HomeSlide2/slide6.jpg'
import { CirclePlay } from 'lucide-react';


const imageSlide = [
    ironman,
    cars,
    stranger,
    spiderman,
    black,
    blade,
    Doreamon,
    loki
]


const imageChanges = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
]
function Home() {
    const [imageStore, setImageStore] = useState(0);
    const [secImage, setSecImage] = useState(0)
    console.log(imageStore)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageStore((prev) => (prev + 1) % imageSlide.length)
        }, 3000)

        console.log(imageSlide)

        return () => clearInterval(interval)
    }, [imageSlide.length]);


    useEffect(() => {
        const interval = setInterval(() => {
            setSecImage((prev) => (prev + 1) % imageChanges.length)
        }, 3500)

        return () => clearInterval(interval)
    }, [imageChanges.length])

    const handlerPlay = (choose) => {
        console.log(choose)
    }

    return (
        <>
            <section className={styles.HomeSlide}>
                <div className={styles.HomeSlidesPage}>
                    <div className={styles.HomeImages}>
                        <img src={imageSlide[imageStore]} alt={`slide ${imageStore + 1}`} />
                        <div className={styles.overlay}></div>
                        <div className={styles.playUser}>
                            <div className={styles.playButton} onClick={() => handlerPlay(imageSlide[imageStore])}>
                                <CirclePlay className={styles.playIcon} />
                            </div>
                        </div>
                    </div>

                    {/* images */}
                    <div className={styles.HomeSecondImage}>
                        <img src={imageChanges[secImage]} alt={`slide ${imageChanges + 1}`} />
                        <div className={styles.line}>
                            {imageChanges.map((_, index) => (
                                <span key={index} className={`${secImage === index ? styles.activeLnine : styles.Nonline} `}>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;