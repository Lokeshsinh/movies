import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Search, Bell, Trash, ChevronDown } from 'lucide-react';
import profile from '../assets/profile/profile.jpg'
import logo from '../assets/profile/logo.png'


function Navbar() {
    const [search, setSearch] = useState("");
    const [slideSearch, setSlideSearch] = useState("");
    const placeHoldSearch = ["Search Movie Names ?", "Search Series Names ?", "Search Cartoon Names ?"];
    useState(() => {
        const interval = setInterval(() => {
            const slides = placeHoldSearch[Math.floor(Math.random() * placeHoldSearch.length)]
            setSlideSearch(slides)
        }, 2000)

        return () => clearInterval(interval)
    })
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarHeading}>
                    <div className={styles.navbarLogo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.navbarInput}>
                        <Search className={styles.searchIcon} />
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={slideSearch} />
                    </div>

                    <div className={styles.navBell}>
                        <div className={styles.navBellFlex}>
                            <Bell className={styles.navBellIcon} />
                        </div>

                        <div className={styles.navBellFlex}>
                            <Trash className={styles.navBellIcon} />
                        </div>

                        <div className={styles.navPorfile}>
                            <div className={styles.navImage}>
                                <img src={profile} alt='profile' />
                            </div>
                            <p>Oggy</p>
                            <ChevronDown className={styles.navArrow} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;