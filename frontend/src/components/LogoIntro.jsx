import React, { useEffect, useState } from "react";
import styles from "./LogoIntro.module.css";
import logos from '../assets/profile/logos.png'

function LogoIntro() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!showIntro) return null;

    return (
        <div className={styles.intro}>
            <div className={styles.background}></div>

            <div className={styles.overlay}></div>

            <div className={styles.logoContainer}>
                <img
                    src={logos}
                    alt="Logo"
                    className={styles.logo}
                />
            </div>
        </div>
    );
}

export default LogoIntro;