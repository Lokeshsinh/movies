import React, { useState } from "react";
import {
    House,
    Film,
    Tv,
    Baby,
    Settings,
    CircleHelp,
    MessageCircle,
    Plus,
} from "lucide-react";

import styles from "./Sidebar.module.css";
import Home from './Home/Home'
import Movies from "./moviesPage/Movies";
import Series from "./series/Series";
import { Link } from "react-router-dom";

function Sidebar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [visible, setVisible] = useState(false);
    const [tab, setTab] = useState(window.location.pathname)

    const menuItems = [
        {
            name: "Home",
            icon: House,
            path: '/'
        },
        {
            name: "Movies",
            icon: Film,
            path: "/movies"
        },
        {
            name: "Series",
            icon: Tv,
            path: "/series"
        },
        {
            name: "Kids",
            icon: Baby,
            path: "/kids"
        },
    ];

    const bottomItems = [
        {
            name: "Settings",
            icon: Settings,
        },
        {
            name: "Help",
            icon: CircleHelp,
        },
    ];
    const handlerActive = (name) => {
        setActiveItem(name)
    }

    return (
        <>
            <aside className={styles.sidebar}>
                <div className={styles.sideWidth}>

                    <div className={styles.sideOne}>
                        {menuItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className={`${styles.sideFlex} ${activeItem === item.name ? styles.active : ""}`}
                                    onClick={() => handlerActive(item.name)}
                                >
                                    <Link className={styles.linkPath} to={item.path}><div className={styles.sideButton}>
                                        <div className={styles.sidePages}><Icon className={styles.sideIcons} /></div>
                                        <span className={styles.sideText}>{item.name}</span>
                                    </div></Link>
                                </div>
                            )
                        })}
                    </div>

                    <div className={styles.sideTwo}>
                        {bottomItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className={styles.sideFlex}>
                                    <div className={styles.sidePages}>
                                        <Icon className={styles.sideIcons} />
                                    </div>
                                    <span className={styles.sideText}>{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </aside>





        </>
    );
}

export default Sidebar;